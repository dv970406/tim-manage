import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';
import { RoomEdge } from '../rooms/room-pagination.dto';
import { MessageEdge } from './message-pagination.dto';

@ObjectType()
export class ReceiveMessageOutput extends CoreOutput {
  @Field((type) => RoomEdge, { nullable: true })
  roomEdge?: RoomEdge;
  @Field((type) => MessageEdge, { nullable: true })
  messageEdge?: MessageEdge;

  @Field((type) => Boolean, { nullable: true })
  isMyAlarm?: boolean;
}
