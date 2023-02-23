import { Module } from '@nestjs/common';
import { PostRepository } from 'src/post/repositories/post.repository';
import { SurveyRepository } from 'src/survey/repositories/survey.repository';
import { UserRepository } from 'src/user/user.repository';
import { CustomTypeOrmModule } from './repository/custom-typeorm.module';
import { NodeResolver } from './resolver/node.resolver';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      UserRepository,
      SurveyRepository,
    ]),
  ],
  providers: [NodeResolver],
})
export class CoreModule {}
