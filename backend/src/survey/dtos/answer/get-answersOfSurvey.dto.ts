import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Answer } from 'src/survey/entities/answer.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { User } from 'src/user/entities/user.entity';

@ArgsType()
export class GetAnswersOfsurveyInput {
  @Field((type) => ID)
  surveyId: string;
}

@ObjectType()
export class GetAnswersOfSurveyOutput extends CoreOutput {
  @Field((type) => Survey, { nullable: true })
  survey?: Survey;
}
