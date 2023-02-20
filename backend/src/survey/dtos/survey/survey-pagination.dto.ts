import { Args, ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { ConnectionInput, PageInfo } from 'src/core/dtos/pagination.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@ObjectType()
export class SurveysConnection {
  @Field((type) => [SurveyEdge])
  edges?: SurveyEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class SurveyEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Survey)
  node: Survey;
}

@ArgsType()
export class SurveysConnectionInput extends ConnectionInput {
  @Field((type) => Boolean, { nullable: true })
  onlyMine?: boolean;
}
