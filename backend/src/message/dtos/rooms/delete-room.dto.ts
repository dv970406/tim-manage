import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';

@InputType()
export class ExitRoomInput {
  @Field((type) => ID)
  roomId: string;
}

@ObjectType()
export class ExitRoomOutput extends CoreOutput {
  @Field((type) => ID, { nullable: true })
  deletedRoomId?: string;
}
