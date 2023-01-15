import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserRepository } from 'src/user/user.repository';
import { VacationRepository } from './vacation.repository';
import { VacationResolver } from './vacation.resolver';
import { VacationService } from './vacation.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      VacationRepository,
      UserRepository,
    ]),
  ],
  providers: [VacationResolver, VacationService],
})
export class VacationModule {}
