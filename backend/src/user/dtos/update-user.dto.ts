import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
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
  'availableVacation',
]) {
  @Field((type) => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  positionId?: number;

  @Field((type) => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  teamId?: number;
}

@ObjectType()
export class UpdateUserOutput extends CoreOutput {}
