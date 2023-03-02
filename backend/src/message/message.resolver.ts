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
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from 'src/user/entities/user.entity';
import { pubsub, TRIGGER_RECEIVE_MESSAGE } from 'src/utils/subscription';
import { MessagesConnection } from './dtos/messages/message-pagination.dto';
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
      const isRoomMember = receiveMessage.room.users.find(
        (member) => member.id === loggedInUser.id,
      );

      if (!isRoomMember) return;
      return !!isRoomMember;
    },

    resolve: ({ receiveMessage }) => {
      return receiveMessage;
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
