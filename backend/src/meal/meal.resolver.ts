import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateWeeklyMealInput,
  CreateWeeklyMealOutput,
} from './dtos/create-weeklyMeal.dto';
import { GetWeeklyMealOutput } from './dtos/get-weeklyMeal.dto';
import { Meal } from './entities/meal.entity';
import { MealService } from './meal.service';

@Resolver((of) => Meal)
export class MealResolver {
  constructor(private readonly mealService: MealService) {}
  @Query((type) => GetWeeklyMealOutput)
  getWeeklyMeal(): Promise<GetWeeklyMealOutput> {
    return this.mealService.getWeeklyMeal();
  }

  @Mutation((type) => CreateWeeklyMealOutput)
  createWeeklyMeal(
    @Args('input') createWeeklyMeal: CreateWeeklyMealInput,
  ): Promise<CreateWeeklyMealOutput> {
    return this.mealService.createWeeklyMeal(createWeeklyMeal);
  }
}
