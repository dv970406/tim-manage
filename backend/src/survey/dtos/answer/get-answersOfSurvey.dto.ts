import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Answer } from 'src/survey/entities/answer.entity';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class GetAnswersOfsurveyInput {
  @Field((type) => ID)
  surveyId: string;
}

@ObjectType()
export class ChartFormatResult {
  @Field((type) => [String])
  labels: string[];
  @Field((type) => [Number])
  series: number[];
}
@ObjectType()
export class ShortAnswerFormat {
  @Field((type) => String)
  paragraphTitle: string;

  @Field((type) => String)
  description: string;

  @Field((type) => [String])
  shortAnswers: string[];
}
@ObjectType()
export class MultipleChoiceFormat {
  @Field((type) => String)
  paragraphTitle: string;

  @Field((type) => String)
  description: string;

  @Field((type) => ChartFormatResult)
  chartFormatResults: ChartFormatResult;
}

@ObjectType()
export class ResponseRate {
  @Field((type) => Number)
  notAnsweredEmployeeCount: number;
  @Field((type) => Number)
  answeredEmployeeCount: number;
}
@ObjectType()
export class GetAnswersOfsurveyOutput extends CoreOutput {
  @Field((type) => [ShortAnswerFormat], { nullable: true })
  shortAnswerFormat?: ShortAnswerFormat[];
  @Field((type) => [MultipleChoiceFormat], { nullable: true })
  multipleChoiceFormat?: MultipleChoiceFormat[];
  @Field((type) => ResponseRate, { nullable: true })
  responseRate?: ResponseRate;
}
