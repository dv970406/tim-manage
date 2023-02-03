import {
  Field,
  ID,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meeting } from '../entities/meeting.entity';

@InputType()
export class UpdateMeetingInput extends PickType(PartialType(Meeting), [
  'title',
  'startTime',
  'endTime',
]) {
  @Field((type) => ID)
  meetingId: string;

  @Field((type) => [ID], { nullable: true })
  attendeesIds?: string[];
}

@ObjectType()
export class UpdateMeetingOutput extends CoreOutput {
  @Field((type) => Meeting, { nullable: true })
  meeting?: Meeting;
}
