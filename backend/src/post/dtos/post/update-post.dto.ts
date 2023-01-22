import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class UpdatePostInput extends PickType(Post, [
  'id',
  'title',
  'content',
]) {}

@ObjectType()
export class UpdatePostOutput extends CoreOutput {}
