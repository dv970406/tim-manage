import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class GetMyInfoOutput extends CoreOutput {
  @Field((type) => User, { nullable: true })
  user?: User;
}
