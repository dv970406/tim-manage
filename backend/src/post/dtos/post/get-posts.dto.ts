import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import {
  PaginationInput,
  PaginationOutput,
} from 'src/core/dtos/pagination.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class GetPostsInput extends PaginationInput {}

@ObjectType()
export class GetPostsOutput extends PaginationOutput {
  @Field((type) => [Post], { nullable: true })
  posts?: Post[];
}
