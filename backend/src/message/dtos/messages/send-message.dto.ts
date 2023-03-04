import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Message } from 'src/message/entity/message.entity';
import { MessageEdge } from './message-pagination.dto';

@InputType()
export class SendMessageInput extends PickType(Message, ['message']) {
  @Field((type) => ID)
  roomId: string;
}

@ObjectType()
export class SendMessageOutput extends CoreOutput {
  @Field((type) => MessageEdge, { nullable: true })
  edge?: MessageEdge;
}
