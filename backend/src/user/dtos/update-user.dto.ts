import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PickType(PartialType(User), [
  'id',
  'email',
  'password',
  'isManager',
  'name',
  'joinDate',
]) {
  @Field((type) => String, { nullable: true })
  @IsOptional()
  @IsString()
  position?: string;

  @Field((type) => String, { nullable: true })
  @IsOptional()
  @IsString()
  team?: string;
}

@ObjectType()
export class UpdateUserOutput extends CoreOutput {}
