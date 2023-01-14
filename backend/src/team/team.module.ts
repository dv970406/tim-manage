import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserRepository } from 'src/user/user.repository';
import { Team } from './entities/team.entity';
import { TeamRepository } from './team.repository';
import { TeamResolver } from './team.resolver';
import { TeamService } from './Team.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([TeamRepository, UserRepository]),
  ],
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
