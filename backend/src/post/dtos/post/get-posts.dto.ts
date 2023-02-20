import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, ConnectionInput } from 'src/core/dtos/pagination.dto';
import { Post } from 'src/post/entities/post.entity';
import { UsersConnection } from 'src/user/dtos/user-pagination.dto';
import { PostEdge, PostsConnection } from './post-pagination.dto';

@ArgsType()
export class GetPostsInput extends ConnectionInput {}

@ObjectType()
export class GetPostsOutput extends CoreOutput {
  @Field((type) => [PostEdge])
  edges?: PostEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
