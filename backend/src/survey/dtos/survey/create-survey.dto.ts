import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class CreateSurveyInput extends PickType(Survey, [
  'isAnonymous',
  'paragraphs',
  'surveyTitle',
]) {}

@ObjectType()
export class CreateSurveyOutput extends CoreOutput {
  @Field((type) => Survey, { nullable: true })
  survey?: Survey;
}
