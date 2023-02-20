import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, ConnectionInput } from 'src/core/dtos/pagination.dto';
import { Survey } from 'src/survey/entities/survey.entity';
import {
  SurveyEdge,
  SurveysConnection,
  SurveysConnectionInput,
} from './survey-pagination.dto';

@ArgsType()
export class GetSurveysInput extends SurveysConnectionInput {}

@ObjectType()
export class GetSurveysOutput extends CoreOutput {
  @Field((type) => [SurveyEdge])
  edges?: SurveyEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
