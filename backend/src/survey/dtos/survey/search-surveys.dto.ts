import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, PaginationInput } from 'src/core/dtos/pagination.dto';
import { Post } from 'src/post/entities/post.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { SurveyEdge } from './survey-pagination.dto';

@InputType()
export class SearchSurveysInput extends PaginationInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}

@ObjectType()
export class SearchSurveysOutput extends CoreOutput {
  @Field((type) => [SurveyEdge])
  edges?: SurveyEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
