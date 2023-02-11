import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Meal } from '../entities/meal.entity';

@CustomRepository(Meal)
export class MealRepository extends Repository<Meal> {}
