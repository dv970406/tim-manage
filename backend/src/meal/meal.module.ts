import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { MealResolver } from './meal.resolver';
import { MealService } from './meal.service';
import { MealRepository } from './repositories/meal.repository';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([MealRepository])],
  providers: [MealResolver, MealService],
})
export class MealModule {}
