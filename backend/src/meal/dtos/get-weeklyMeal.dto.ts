import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';
import { Meal } from '../entities/meal.entity';

@ObjectType()
export class GetWeeklyMealOutput extends CoreOutput {
  @Field((type) => Meal, { nullable: true })
  weeklyMeal?: Meal;
}
