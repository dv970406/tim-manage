import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Any, ArrayContainedBy, ArrayOverlap, In } from 'typeorm';
import { ExitRoomInput, ExitRoomOutput } from './dtos/rooms/delete-room.dto';
import { GetRoomInput, GetRoomOutput } from './dtos/rooms/get-room.dto';
import { GetRoomsOutput } from './dtos/rooms/get-rooms.dto';
import { RoomRepository } from './repositories/room.repository';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomRepository)
    private readonly roomRepo: RoomRepository,
  ) {}

  async getRooms(loggedInUser: User): Promise<GetRoomsOutput> {
    try {
      // find Method로는 room테이블의 users칼럼 배열값 안에 특정 id가 포함된 값만을 가져올 수 없었다.
      const rooms = await this.roomRepo.find({
        order: {
          createdAt: 'DESC',
        },
        relations: {
          users: true,
        },
      });

      // 전체 rooms배열에서 내가 속한 room들만 들고옴
      const filterMyRooms = rooms.filter((room) =>
        room.users.find((user) => user.id === loggedInUser.id),
      );

      // 내가 속한 room들의 멤버들 중에서 내 이름을 지우고 데이터를 반환한다.
      const getMyRoomsExceptMe = filterMyRooms.map((room) => {
        return {
          ...room,
          users: room.users.filter((user) => user.id !== loggedInUser.id),
        };
      });

      return {
        ok: true,
        rooms: getMyRoomsExceptMe,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '방 목록을 조회할 수 없습니다.',
      };
    }
  }

  async getRoom(
    loggedInUser: User,
    { roomId }: GetRoomInput,
  ): Promise<GetRoomOutput> {
    try {
      const room = await this.roomRepo.findOne({
        where: {
          id: roomId,
        },
        order: {
          createdAt: 'DESC',
        },
        relations: {
          messages: true,
          users: true,
        },
      });

      if (!room) {
        throw new Error('존재하지 않는 방입니다.');
      }

      const isRoomMember = room.users.find(
        (member) => member.id === loggedInUser.id,
      );
      if (!isRoomMember) {
        throw new Error('방의 멤버가 아닙니다.');
      }

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
