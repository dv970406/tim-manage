import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';
import { PostEdge } from './post-pagination.dto';

@InputType()
export class CreatePostInput extends PickType(Post, ['title', 'content']) {}

@ObjectType()
export class CreatePostOutput extends CoreOutput {
  @Field((type) => PostEdge)
  edge?: PostEdge;
}
