import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Like } from 'src/post/entities/like.entity';

@InputType()
export class ToggleLikeInput extends PickType(Like, []) {
  @Field((type) => ID)
  postId: string;
}

@ObjectType()
export class ToggleLikeOutput extends CoreOutput {
  @Field((type) => Like, { nullable: true })
  like?: Like;
}
