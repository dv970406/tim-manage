import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from './core.dto';

@InputType()
export class PaginationInput {
  @Field((type) => Int, { defaultValue: 1 })
  page: number;
}

@ObjectType()
export class PaginationOutput extends CoreOutput {
  @Field((type) => Int, { nullable: true })
  totalPage?: number;

  @Field((type) => Int, { nullable: true })
  totalResult?: number;
}
