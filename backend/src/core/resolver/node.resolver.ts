import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { Survey } from 'src/survey/entities/survey.entity';
import { SurveyService } from 'src/survey/survey.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { NodeInput, Node } from '../dtos/node.dto';

@Resolver((of) => Node)
export class NodeResolver {
  constructor() {}

  @Query((type) => Node)
  node(@Args() { id }: NodeInput) {
    return id;
  }
}
