import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import {
  pubsub,
  TRIGGER_RECEIVE_MESSAGE,
  TRIGGER_RECEIVE_IN_ROOM,
} from 'src/utils/subscription';
import {
  SendMessageInput,
  SendMessageOutput,
} from './dtos/messages/send-message.dto';
import { Message } from './entity/message.entity';
import { MessageRepository } from './repositories/message.repository';
import { RoomRepository } from './repositories/room.repository';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
    @InjectRepository(MessageRepository)
    private readonly messageRepo: MessageRepository,
    @InjectRepository(RoomRepository)
    private readonly roomRepo: RoomRepository,
  ) {}

  isMine({ id }: User, message: Message) {
    return message.user.id === id;
  }
  async sendMessage(
    loggedInUser: User,
    { message, roomId }: SendMessageInput,
  ): Promise<SendMessageOutput> {
    try {
      const findRoom = await this.roomRepo.findRoom({
        roomId,
      });

      const isRoomMember = findRoom.users.find(
        (user) => user.id === loggedInUser.id,
      );
      if (!isRoomMember) throw new Error('방의 멤버가 아닙니다.');

      const newMessage = await this.messageRepo.save({
        message,
        room: findRoom,
        user: loggedInUser,
      });

      const newMessageEdge = {
        node: newMessage,
        cursor: newMessage.createdAt,
      };

      // room에 있을 때의 대화
      pubsub.publish(TRIGGER_RECEIVE_IN_ROOM, {
        receiveInRoom: {
          ok: true,
          edge: newMessageEdge,
        },
      });
      pubsub.subscribe(TRIGGER_RECEIVE_IN_ROOM, async () => {
        if (newMessage.userId !== loggedInUser.id) {
          await this.messageRepo.save({
            ...newMessage,
            isRead: true,
          });
        }
      });

      const newRoomEdge = {
        node: {
          ...findRoom,
          recentMessage: newMessage,
        },
        cursor: findRoom.createdAt,
      };

      // room에 없을 때 메시지가 온 것을 감지
      pubsub.publish(TRIGGER_RECEIVE_MESSAGE, {
        receiveMessage: {
          ok: true,
          edge: newRoomEdge,
        },
      });

      return {
        ok: true,
        edge: newMessageEdge,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '메세지 보내기에 실패했습니다.',
      };
    }
  }
}
