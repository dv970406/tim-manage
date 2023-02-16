import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Post } from 'src/post/entities/post.entity';
import { PostEdge } from './post-pagination.dto';

@InputType()
export class SearchPostsInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}

@ObjectType()
export class SearchPostsOutput extends CoreOutput {
  @Field((type) => [PostEdge])
  edges?: PostEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
