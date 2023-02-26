import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserModule } from 'src/user/user.module';
import { PositionRepository } from './position.repository';
import { PositionResolver } from './position.resolver';
import { PositionService } from './position.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([PositionRepository]),
    UserModule,
  ],
  providers: [PositionService, PositionResolver],
})
export class PositionModule {}
