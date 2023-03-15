import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { pubsub, TRIGGER_RECEIVE_MESSAGE } from 'src/utils/subscription';
import { ReceiveMessageOutput } from './dtos/messages/receive-message.dto';
import {
  SendMessageInput,
  SendMessageOutput,
} from './dtos/messages/send-message.dto';
import { Message } from './entity/message.entity';
import { MessageService } from './message.service';

@Resolver((type) => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Subscription((type) => ReceiveMessageOutput, {
    filter: ({ receiveMessage }, _, { user: loggedInUser }) => {
      const isRoomMember = receiveMessage.roomEdge.node.users.find(
        (member) => member.id === loggedInUser.id,
      );

      if (!isRoomMember) return;
      return !!isRoomMember;
    },

    resolve: (
      {
        receiveMessage: {
          roomEdge: { node, cursor },
          messageEdge,
        },
      },
      _,
      { user: loggedInUser },
    ) => {
      // room.users에서 나 자신은 빼고 return
      const filteringExceptMe = node.users.filter(
        (user) => user.id !== loggedInUser.id,
      );

      // 내가 안읽은 message들을 count
      const unreadMessageCount = node.messages.filter(
        (message) =>
          message.isRead === false && message.userId !== loggedInUser.id,
      ).length;

      const isMyAlarm = node.recentMessage.user.id !== loggedInUser.id;
      return {
        ok: true,
        roomEdge: {
          node: {
            ...node,
            users: filteringExceptMe,
            unreadMessageCount,
          },
          cursor,
        },
        isMyAlarm,
        messageEdge,
      };
    },
  })
  @UseGuards(LoginGuard)
  receiveMessage() {
    return pubsub.asyncIterator(TRIGGER_RECEIVE_MESSAGE);
  }

  @ResolveField((type) => Boolean)
  @UseGuards(LoginGuard)
  isMine(
    @LoggedInUser() loggedInUser: User,
    @Parent() message: Message,
  ): boolean {
    return this.messageService.isMine(loggedInUser, message);
  }

  @Mutation((type) => SendMessageOutput)
  @UseGuards(LoginGuard)
  sendMessage(
    @LoggedInUser() loggedInUser: User,
    @Args('input') sendMessageInput: SendMessageInput,
  ): Promise<SendMessageOutput> {
    return this.messageService.sendMessage(loggedInUser, sendMessageInput);
  }
}
