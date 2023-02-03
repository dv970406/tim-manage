import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class GetKingOfMeetingOutput extends CoreOutput {
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
