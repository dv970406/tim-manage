import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Comment } from 'src/post/entities/comment.entity';

@InputType()
export class GetMyCommentsInput {}

@ObjectType()
export class GetMyCommentsOutput extends CoreOutput {
  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];
}
