import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class GetUsersInput extends PickType(User, ['id']) {}

@ObjectType()
export class GetUsersOutput extends CoreOutput {
  @Field((type) => User, { nullable: true })
  users?: User[];
}
