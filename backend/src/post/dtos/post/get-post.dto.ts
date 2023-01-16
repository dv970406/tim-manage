import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class GetPostInput extends PickType(Post, ['_id']) {}

@ObjectType()
export class GetPostOutput extends CoreOutput {
  @Field((type) => Post, { nullable: true })
  post?: Post;
}
