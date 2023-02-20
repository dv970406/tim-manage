import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Answer } from 'src/survey/entities/answer.entity';

@ObjectType()
export class AnswersConnection {
  @Field((type) => [AnswerEdge])
  edges?: AnswerEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class AnswerEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Answer)
  node: Answer;
}
