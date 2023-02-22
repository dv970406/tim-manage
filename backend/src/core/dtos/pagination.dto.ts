import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class ConnectionInput {
  // search 목적
  @Field(() => String, { nullable: true })
  keyword?: string;

  // pagination 목적
  @Field(() => Date, { nullable: true })
  after?: Date;

  @Field(() => Date, { nullable: true })
  before?: Date;

  @Field(() => Int, { defaultValue: 10 })
  first?: number;

  @Field(() => Int, { defaultValue: 10 })
  last?: number;
}

@ObjectType()
export class PageInfo {
  @Field((type) => Boolean)
  hasNextPage: Boolean;
  @Field((type) => Boolean)
  hasPreviousPage?: Boolean;
  @Field((type) => Date, { nullable: true })
  startCursor?: Date;
  @Field((type) => Date, { nullable: true })
  endCursor: Date;
}
