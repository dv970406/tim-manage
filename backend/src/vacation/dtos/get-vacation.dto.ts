import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Vacation } from '../entities/vacation.entity';

@InputType()
export class GetVacationInput extends PickType(Vacation, ['id']) {}

@ObjectType()
export class GetVacationOutput extends CoreOutput {
  @Field((type) => Vacation, { nullable: true })
  vacation?: Vacation;
}
