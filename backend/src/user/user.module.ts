import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { PositionRepository } from 'src/position/position.repository';
import { TeamRepository } from 'src/team/team.repository';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      UserRepository,
      PositionRepository,
      TeamRepository,
    ]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
