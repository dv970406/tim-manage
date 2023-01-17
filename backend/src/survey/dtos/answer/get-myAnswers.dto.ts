import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Answer } from 'src/survey/entities/answer.entity';

@InputType()
export class GetMyAnswersInput {}

@ObjectType()
export class GetMyAnswersOutput extends CoreOutput {
  @Field((type) => [Answer], { nullable: true })
  answers?: Answer[];
}
