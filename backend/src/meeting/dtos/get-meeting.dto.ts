import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meeting } from '../entities/meeting.entity';

@InputType()
export class GetMeetingInput extends PickType(Meeting, ['id']) {}

@ObjectType()
export class GetMeetingOutput extends CoreOutput {
  @Field((type) => Meeting, { nullable: true })
  meeting?: Meeting;
}
