import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Vacation } from '../entities/vacation.entity';

@ObjectType()
export class GetUnConfirmedByMeVacationsOutput extends CoreOutput {
  @Field((type) => [Vacation], { nullable: true })
  vacations?: Vacation[];
}
