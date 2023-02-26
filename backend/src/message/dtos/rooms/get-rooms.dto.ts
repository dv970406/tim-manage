import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { ConnectionInput, PageInfo } from 'src/core/dtos/pagination.dto';
import { Room } from 'src/message/entity/room.entity';
import { RoomEdge } from './room-pagination.dto';

@ArgsType()
export class GetRoomsInput extends ConnectionInput {}
@ObjectType()
export class GetRoomsOutput extends CoreOutput {
  @Field((type) => [RoomEdge], { nullable: true })
  edges?: RoomEdge[];

  @Field((type) => PageInfo, { nullable: true })
  pageInfo?: PageInfo;
}
