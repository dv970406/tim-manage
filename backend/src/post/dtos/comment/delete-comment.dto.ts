import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Comment } from 'src/post/entities/comment.entity';

@InputType()
export class DeleteCommentInput extends PickType(Comment, ['_id']) {}

@ObjectType()
export class DeleteCommentOutput extends CoreOutput {}
