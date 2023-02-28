import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { NotificationRepository } from 'src/notification/notification.repository';
import { PositionRepository } from 'src/position/position.repository';
import { CommentRepository } from 'src/post/repositories/comment.repository';
import { LikeRepository } from 'src/post/repositories/like.repository';
import { PostRepository } from 'src/post/repositories/post.repository';
import { AnswerRepository } from 'src/survey/repositories/answer.repository';
import { TeamRepository } from 'src/team/team.repository';
import { VacationRepository } from 'src/vacation/vacation.repository';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      UserRepository,
      PositionRepository,
      TeamRepository,
      CommentRepository,
      PostRepository,
      LikeRepository,
      AnswerRepository,
      VacationRepository,
      NotificationRepository,
    ]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
