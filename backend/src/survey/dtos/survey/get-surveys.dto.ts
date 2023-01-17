import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class GetSurveysInput {}

@ObjectType()
export class GetSurveysOutput extends CoreOutput {
  @Field((type) => [Survey], { nullable: true })
  surveys?: Survey[];
}
