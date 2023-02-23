import {
  Args,
  ID,
  Info,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { PostRepository } from 'src/post/repositories/post.repository';
import { Survey } from 'src/survey/entities/survey.entity';
import { SurveyRepository } from 'src/survey/repositories/survey.repository';
import { SurveyService } from 'src/survey/survey.service';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { NodeInput, Node } from '../dtos/node.dto';

@Resolver((of) => Node)
export class NodeResolver {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
    @InjectRepository(PostRepository)
    private readonly postRepo: PostRepository,
    @InjectRepository(SurveyRepository)
    private readonly surveyRepo: SurveyRepository,
  ) {}

  @Query((type) => Node)
  async node(@Args() { id }: NodeInput) {
    // Retrieve node from database (e.g., using TypeORM)
    const user = await this.userRepo.findUser({ userId: id });
    if (User.isTypeOf(user)) {
      return user as User;
    }

    const post = await this.postRepo.findPost({ postId: id });
    if (Post.isTypeOf(post)) {
      return post as Post;
    }
    const survey = await this.surveyRepo.findSurvey({ surveyId: id });
    if (Survey.isTypeOf(survey)) {
      return survey as Survey;
    }
  }

  @ResolveField(() => [User])
  users(
    @Parent() node, // Resolved object that implements Character
    @Info() { nodeType }, // Type of the object that implements Character
    @Args('keyword', { type: () => String }) keyword: string,
  ) {
    console.log(nodeType);
    console.log(node);
    console.log(keyword);
    console.log('please');
    return node;
  }
}
