import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Meal } from '../entities/meal.entity';

// [[],[],[],~~] 구조
@InputType()
export class CreateWeeklyMealInput {
  @Field((type) => String)
  excelToJson: string;
}

@ObjectType()
export class CreateWeeklyMealOutput extends CoreOutput {
  @Field((type) => Meal, { nullable: true })
  weeklyMeal?: Meal;
}
