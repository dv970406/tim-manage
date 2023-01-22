import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'isManager',
  'name',
  'joinDate',
]) {
  @Field((type) => ID)
  positionId: string;

  @Field((type) => ID)
  teamId: string;
}

@ObjectType()
export class CreateUserOutput extends CoreOutput {}
