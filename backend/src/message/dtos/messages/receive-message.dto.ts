import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';
import { RoomEdge } from '../rooms/room-pagination.dto';

@ObjectType()
export class ReceiveMessageOutput extends CoreOutput {
  @Field((type) => RoomEdge, { nullable: true })
  edge?: RoomEdge;
}
