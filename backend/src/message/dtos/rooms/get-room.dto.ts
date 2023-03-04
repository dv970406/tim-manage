import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';

@ArgsType()
export class GetOrCreateRoomInput {
  @Field((type) => ID, { nullable: true })
  roomId?: string;
  @Field((type) => ID, { nullable: true })
  userId?: string;
}
@ObjectType()
export class GetOrCreateRoomOutput extends CoreOutput {
  @Field((type) => Room, { nullable: true })
  room?: Room;
}
