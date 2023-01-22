import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Comment } from 'src/post/entities/comment.entity';

@InputType()
export class CreateCommentInput extends PickType(Comment, ['content']) {
  @Field((type) => ID)
  postId: string;
}

@ObjectType()
export class CreateCommentOutput extends CoreOutput {}
