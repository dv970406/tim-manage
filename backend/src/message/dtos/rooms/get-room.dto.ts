import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';

@ArgsType()
export class GetRoomInput {
  @Field((type) => ID)
  roomId: string;
}
@ObjectType()
export class GetRoomOutput extends CoreOutput {
  @Field((type) => Room, { nullable: true })
  room?: Room;
}
