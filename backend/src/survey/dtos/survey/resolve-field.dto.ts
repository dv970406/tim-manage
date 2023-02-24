import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class ResponseRate {
  @Field((type) => Number)
  notAnsweredEmployeeCount: number;
  @Field((type) => Number)
  answeredEmployeeCount: number;
}

@ObjectType()
export class ChartFormatResult {
  @Field((type) => [String])
  labels: string[];
  @Field((type) => [Number])
  series: number[];
}

@ObjectType()
class ShortAnswersFormat {
  @Field((type) => String)
  result: string;
  @Field((type) => User)
  user: User;
}
@ObjectType()
export class ShortAnswerFormat {
  @Field((type) => String)
  paragraphTitle: string;

  @Field((type) => String)
  description: string;

  @Field((type) => [ShortAnswersFormat])
  shortAnswers: ShortAnswersFormat[];
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
