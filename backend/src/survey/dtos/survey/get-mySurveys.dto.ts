import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class GetMySurveysInput {}

@ObjectType()
export class GetMySurveysOutput extends CoreOutput {
  @Field((type) => [Survey], { nullable: true })
  surveys?: Survey[];
}
