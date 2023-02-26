import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Room } from 'src/message/entity/room.entity';

@ObjectType()
export class RoomsConnection {
  @Field((type) => [RoomEdge], { nullable: true })
  edges?: RoomEdge[];

  @Field((type) => PageInfo, { nullable: true })
  pageInfo?: PageInfo;
}

@ObjectType()
export class RoomEdge {
  @Field((type) => Date, { nullable: true })
  cursor?: Date;

  @Field((type) => Room)
  node: Room;
}
