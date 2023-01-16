import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class GetPostsInput {}

@ObjectType()
export class GetPostsOutput extends CoreOutput {
  @Field((type) => [Post], { nullable: true })
  posts?: Post[];
}
