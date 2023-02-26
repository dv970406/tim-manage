import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { pubsub, TRIGGER_SEND_MESSAGE } from 'src/utils/subscription';
import {
  SendMessageInput,
  SendMessageOutput,
} from './dtos/messages/send-message.dto';
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

  async sendMessage(
    loggedInUser: User,
    { message, roomId, listenerId }: SendMessageInput,
  ): Promise<SendMessageOutput> {
    try {
      let listener: User;
      if (listenerId) {
        listener = await this.userRepo.findUser({ userId: listenerId });
      }
      const findRoom = await this.roomRepo.findOrCreateRoom({
        roomId,
        listener,
        loggedInUser,
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

      pubsub.publish(TRIGGER_SEND_MESSAGE, {
        subscriptionRoom: newMessage,
      });

      return {
        ok: true,
        message: newMessage,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '메세지 보내기에 실패했습니다.',
      };
    }
  }
}
