import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Like } from 'src/post/entities/like.entity';

@InputType()
export class GetMyLikesInput {}

@ObjectType()
export class GetMyLikesOutput extends CoreOutput {
  @Field((type) => [Like], { nullable: true })
  likes?: Like[];
}
