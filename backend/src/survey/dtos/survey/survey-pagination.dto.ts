import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@ObjectType()
export class SurveysPaginationFormat {
  @Field((type) => [SurveyEdge])
  edges?: SurveyEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class SurveyEdge {
  @Field((type) => ID)
  cursor: string;

  @Field((type) => Survey)
  node: Survey;
}
