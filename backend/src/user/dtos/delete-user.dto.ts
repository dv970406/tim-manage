import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class DeleteUserInput extends PickType(User, ['id']) {}

@ObjectType()
export class DeleteUserOutput extends CoreOutput {
  @Field((type) => ID, { nullable: true })
  deletedUserId?: string;
}
