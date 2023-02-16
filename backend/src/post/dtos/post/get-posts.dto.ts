import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, PaginationInput } from 'src/core/dtos/pagination.dto';
import { Post } from 'src/post/entities/post.entity';
import { PostEdge, PostsPaginationFormat } from './post-pagination.dto';

@ArgsType()
export class GetPostsInput extends PaginationInput {}

@ObjectType()
export class GetPostsOutput extends CoreOutput {
  @Field((type) => [PostEdge])
  edges?: PostEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
