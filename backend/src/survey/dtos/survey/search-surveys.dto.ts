import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, ConnectionInput } from 'src/core/dtos/pagination.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class SearchSurveysInput extends ConnectionInput {}

@ObjectType()
export class SearchSurveysOutput extends CoreOutput {
  @Field((type) => [Survey], { nullable: true })
  surveys?: Survey[];
}
