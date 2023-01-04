import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'password',
  'isManager',
  'name',
]) {
  @Field((type) => String)
  @IsString()
  position: string;

  @Field((type) => String)
  @IsString()
  team: string;
}

@ObjectType()
export class CreateUserOutput extends CoreOutput {}
