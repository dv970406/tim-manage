import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ResolveField, Resolver } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from 'src/user/entities/user.entity';
import { MessagesConnection } from './dtos/messages/message-pagination.dto';
import {
  SendMessageInput,
  SendMessageOutput,
} from './dtos/messages/send-message.dto';
import { Message } from './entity/message.entity';
import { MessageService } from './message.service';

@Resolver((type) => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Mutation((type) => SendMessageOutput)
  @UseGuards(LoginGuard)
  sendMessage(
    @LoggedInUser() loggedInUser: User,
    @Args('input') sendMessageInput: SendMessageInput,
  ): Promise<SendMessageOutput> {
    return this.messageService.sendMessage(loggedInUser, sendMessageInput);
  }
}
