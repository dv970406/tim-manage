import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';
import { SurveyEdge } from './survey-pagination.dto';

@InputType()
export class CreateSurveyInput extends PickType(Survey, [
  'isAnonymous',
  'paragraphs',
  'surveyTitle',
]) {}

@ObjectType()
export class CreateSurveyOutput extends CoreOutput {
  @Field((type) => SurveyEdge)
  edge?: SurveyEdge;
}
