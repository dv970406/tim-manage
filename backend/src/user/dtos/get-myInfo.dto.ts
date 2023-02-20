import { Args, ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { CommentsConnection } from 'src/post/dtos/comment/comment-pagination.dto';
import { LikesConnection } from 'src/post/dtos/like/like-pagination.dto';
import { PostsConnection } from 'src/post/dtos/post/post-pagination.dto';
import { AnswersConnection } from 'src/survey/dtos/answer/answer-pagination.dto';
import { VacationsConnection } from 'src/vacation/dtos/vacation-pagination.dto';
import { User } from '../entities/user.entity';

@ArgsType()
export class GetMyInfoInput extends ConnectionInput {
  @Field((type) => Boolean, { nullable: true, defaultValue: false })
  isAllInfo?: boolean;
}
@ObjectType()
export class GetMyInfoOutput extends CoreOutput {
  @Field((type) => User, { nullable: true })
  user?: User;
}
