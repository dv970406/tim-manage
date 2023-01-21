import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meeting } from '../entities/meeting.entity';

@ObjectType()
export class GetMeetingsOutput extends CoreOutput {
  @Field((type) => [Meeting], { nullable: true })
  meetings?: Meeting[];
}
