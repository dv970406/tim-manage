import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class SearchPostsInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}

@ObjectType()
export class SearchPostsOutput extends CoreOutput {
  @Field((type) => [Post], { nullable: true })
  posts?: Post[];
}