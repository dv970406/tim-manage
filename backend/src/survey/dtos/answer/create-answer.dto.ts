import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Answer } from 'src/survey/entities/answer.entity';

@InputType()
export class CreateAnswerInput extends PickType(Answer, ['results']) {
  @Field((type) => ID)
  surveyId: string;
}

@ObjectType()
export class CreateAnswerOutput extends CoreOutput {
  @Field((type) => Answer, { nullable: true })
  answer?: Answer;
  @Field((type) => ID, { nullable: true })
  surveyId?: string;
}
