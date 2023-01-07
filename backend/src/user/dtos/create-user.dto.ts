import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'password',
  'isManager',
  'name',
  'joinDate',
]) {
  @Field((type) => Number)
  @IsNumber()
  positionId: number;

  @Field((type) => Number)
  @IsNumber()
  teamId: number;
}

@ObjectType()
export class CreateUserOutput extends CoreOutput {}
