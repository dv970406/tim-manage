import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Like } from 'src/post/entities/like.entity';

@InputType()
export class ToggleLikeInput extends PickType(Like, []) {
  @Field((type) => Number)
  @IsNumber()
  postId: number;
}

@ObjectType()
export class ToggleLikeOutput extends CoreOutput {}
