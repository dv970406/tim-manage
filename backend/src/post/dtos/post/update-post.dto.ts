import {
  Field,
  ID,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class UpdatePostInput extends PickType(PartialType(Post), [
  'title',
  'content',
]) {
  @Field((type) => ID)
  postId: string;
}

@ObjectType()
export class UpdatePostOutput extends CoreOutput {
  @Field((type) => Post, { nullable: true })
  post?: Post;
}
