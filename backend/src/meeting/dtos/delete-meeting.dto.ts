import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meeting } from '../entities/meeting.entity';

@InputType()
export class DeleteMeetingInput extends PickType(Meeting, ['id']) {}

@ObjectType()
export class DeleteMeetingOutput extends CoreOutput {
  @Field((type) => ID, { nullable: true })
  deletedMeetingId?: string;
}
