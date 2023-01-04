import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from 'src/position/entities/position.entity';
import { Team } from 'src/team/entities/team.entity';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Position, Team])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
