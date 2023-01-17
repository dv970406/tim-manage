import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Answer } from 'src/survey/entities/answer.entity';

@InputType()
export class CreateAnswerInput extends PickType(Answer, ['results']) {
  @Field((type) => Number)
  surveyId: number;
}

@ObjectType()
export class CreateAnswerOutput extends CoreOutput {}
