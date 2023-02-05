import {
  Field,
  ID,
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
  'email',
  'password',
  'isManager',
  'name',
  'joinDate',
]) {
  @Field((type) => ID)
  userId: string;

  @Field((type) => ID, { nullable: true })
  @IsOptional()
  positionId?: string;

  @Field((type) => ID, { nullable: true })
  @IsOptional()
  teamId?: string;

  // DB에 저장되는 값은 Number여야해서 Entity에는 Number로 적고 스키마값은 String으로 함
  @Field((type) => String, { nullable: true })
  availableVacation?: string;
}

@ObjectType()
export class UpdateUserOutput extends CoreOutput {
  @Field((type) => User, { nullable: true })
  user?: User;
}
