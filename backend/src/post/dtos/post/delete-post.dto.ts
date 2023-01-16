import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class DeletePostInput extends PickType(Post, ['_id']) {}

@ObjectType()
export class DeletePostOutput extends CoreOutput {}
