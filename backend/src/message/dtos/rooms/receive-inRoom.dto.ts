import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MessageEdge } from '../messages/message-pagination.dto';

@ArgsType()
export class ReceiveInRoomInput {
  @Field((type) => ID)
  roomId: string;
}
@ObjectType()
export class ReceiveInRoomOutput extends CoreOutput {
  @Field((type) => MessageEdge)
  edge?: MessageEdge;
}
