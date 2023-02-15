import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Post } from 'src/post/entities/post.entity';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class SearchSurveysInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}

@ObjectType()
export class SearchSurveysOutput extends CoreOutput {
  @Field((type) => [Survey], { nullable: true })
  surveys?: Survey[];
}
