import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Vacation } from '../entities/vacation.entity';

@InputType()
export class UpdateVacationInput extends PickType(Vacation, [
  'id',
  'startDate',
  'endDate',
  'isHalf',
]) {}

@ObjectType()
export class UpdateVacationOutput extends CoreOutput {
  @Field((type) => Vacation, { nullable: true })
  vacation?: Vacation;
}
