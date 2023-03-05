import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { LessThan, Not } from 'typeorm';
import { MessagesConnection } from './dtos/messages/message-pagination.dto';
import { ExitRoomInput, ExitRoomOutput } from './dtos/rooms/delete-room.dto';
import {
  GetOrCreateRoomInput,
  GetOrCreateRoomOutput,
} from './dtos/rooms/get-room.dto';
import { GetRoomsInput, GetRoomsOutput } from './dtos/rooms/get-rooms.dto';
import { Message } from './entity/message.entity';
import { Room } from './entity/room.entity';
import { MessageRepository } from './repositories/message.repository';
import { RoomRepository } from './repositories/room.repository';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomRepository)
    private readonly roomRepo: RoomRepository,
    @InjectRepository(MessageRepository)
    private readonly messageRepo: MessageRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async recentMessage(room: Room): Promise<Message> {
    return this.messageRepo.findOne({
      where: {
        room: {
          id: room.id,
        },
        isRead: false,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
  async unreadMessageCount(loggedInUser: User, room: Room): Promise<number> {
    return this.messageRepo.count({
      where: {
        room: {
          id: room.id,
        },
        isRead: false,
        user: {
          id: Not(loggedInUser.id),
        },
      },
    });
  }
  async messagesOfRoomConnection(
    loggedInUser: User,
    room: Room,
    { first, after }: ConnectionInput,
  ): Promise<MessagesConnection> {
    const [findMessages, totalCount] = await this.messageRepo.findAndCount({
      where: {
        room: {
          id: room.id,
        },
        ...(after && { createdAt: LessThan(after) }),
      },
      relations: {
        user: true,
      },
      order: { createdAt: 'DESC' },

      take: first,
    });

    // isRead를 false => true로 업데이트한 것을 DB에 반영하기 위함
    // 아래 users 필터링 코드는 저장되면 안되므로 여기에 save문 작성
    findMessages.forEach((message) => {
      if (message.userId !== loggedInUser.id) {
        return (message.isRead = true);
      }
    });
    await this.messageRepo.save(findMessages);

    const edges = findMessages.map((message) => ({
      node: message,
      cursor: message.createdAt,
    }));

    const endCursor = totalCount > 0 ? edges[edges.length - 1].cursor : null;

    return {
      edges,
      pageInfo: {
        endCursor,
        hasNextPage: totalCount > first,
      },
    };
  }
  async getRooms(
    loggedInUser: User,
    { first, after }: GetRoomsInput,
  ): Promise<GetRoomsOutput> {
    try {
      // find Method로는 room테이블의 users칼럼 배열값 안에 특정 id가 포함된 값만을 가져올 수 없었다.
      const [findMyRooms, totalCount] = await this.roomRepo.findAndCount({
        where: {
          ...(after && { createdAt: LessThan(after) }),
        },
        order: {
          createdAt: 'DESC',
          messages: {
            isRead: 'ASC', // false가 true보다 앞임
          },
        },
        relations: {
          users: true,
        },
      });

      // 전체 rooms배열에서 내가 속한 room들만 들고옴
      const filterMyRooms = findMyRooms?.filter((room) =>
        room.users.find((user) => user.id === loggedInUser.id),
      );

      // 내가 속한 room들의 멤버들 중에서 내 이름을 지우고 데이터를 반환한다.
      const edges = filterMyRooms?.map((room) => ({
        node: {
          ...room,
          users: room.users.filter((user) => user.id !== loggedInUser.id),
        },
        cursor: room.createdAt,
      }));

      const endCursor = totalCount > 0 ? edges[edges.length - 1].cursor : null;

      return {
        ok: true,
        edges,
        pageInfo: {
          endCursor,
          hasNextPage: totalCount > first,
        },
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '방 목록을 조회할 수 없습니다.',
      };
    }
  }

  async getOrCreateRoom(
    loggedInUser: User,
    { roomId, userId }: GetOrCreateRoomInput,
  ): Promise<GetOrCreateRoomOutput> {
    try {
      let room: Room;
      if (roomId) {
        room = await this.roomRepo.findOne({
          where: {
            id: roomId,
          },
          order: {
            messages: {
              createdAt: 'DESC',
            },
          },
          relations: {
            messages: true,
            users: true,
          },
        });
      } else if (userId) {
        // 로그인한 유저와 클릭한 유저가 속한 room이 있는지 확인
        // find 메소드에는 ManyToMany 관계의 id필드를 두 가지 값을 가져야하는 것을 AND조건으로 작성할 수 없어서 createQueryBuilder사용
        room = await this.roomRepo
          .createQueryBuilder('room')
          .leftJoinAndSelect('room.users', 'user')
          .leftJoinAndSelect('room.messages', 'message')
          .where('user.id = :userId1', { userId1: loggedInUser.id })
          .andWhere('user.id = :userId2', { userId2: userId })
          .getOne();

        // room이 없다면 create
        if (!room) {
          const findUser = await this.userRepo.findUser({ userId });

          const newRoom = await this.roomRepo.save({
            users: [loggedInUser, findUser],
          });

          room = await this.roomRepo.findRoom({ roomId: newRoom.id });
        }
      }

      if (!room) {
        throw new Error('존재하지 않는 방입니다.');
      }

      // users명단에서 내 이름은 제거하기
      room = {
        ...room,
        users: room.users?.filter((user) => user.id !== loggedInUser.id),
      };

      return {
        ok: true,
        room,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '방을 조회할 수 없습니다.',
      };
    }
  }

  async exitRoom(
    loggedInUser: User,
    { roomId }: ExitRoomInput,
  ): Promise<ExitRoomOutput> {
    try {
      // room을 아예 지워버리면 안되고 room에서 해당 user의 id만 제거해야됨
      const room = await this.roomRepo.findOne({
        where: {
          id: roomId,
        },
      });

      if (!room) {
        throw new Error('존재하지 않는 방입니다.');
      }

      room.users.filter((user) => user.id !== loggedInUser.id);

      await this.roomRepo.save(room);

      return {
        ok: true,
        deletedRoomId: room.id,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '방을 삭제할 수 없습니다.',
      };
    }
  }
}
