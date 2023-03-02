import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';

@ObjectType()
export class ReceiveMessageOutput extends CoreOutput {
  @Field((type) => Room, { nullable: true })
  room?: Room;
}
