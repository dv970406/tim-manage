import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class GetSurveyInput extends PickType(Survey, ['_id']) {}

@ObjectType()
export class GetSurveyOutput extends CoreOutput {
  @Field((type) => Survey, { nullable: true })
  survey?: Survey;
}
