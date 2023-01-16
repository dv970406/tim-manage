import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Comment } from 'src/post/entities/comment.entity';

@InputType()
export class UpdateCommentInput extends PickType(Comment, ['_id', 'content']) {}

@ObjectType()
export class UpdateCommentOutput extends CoreOutput {}
