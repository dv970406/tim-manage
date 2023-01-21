import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meeting } from '../entities/meeting.entity';

@InputType()
export class CreateMeetingInput extends PickType(Meeting, [
  'title',
  'startTime',
  'endTime',
]) {
  @Field((type) => [ID], { nullable: true })
  attendeesIds?: string[];
}

@ObjectType()
export class CreateMeetingOutput extends CoreOutput {
  @Field((type) => Meeting, { nullable: true })
  meeting?: Meeting;
}
