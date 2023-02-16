import { Type } from '@nestjs/common';
import {
  ArgsType,
  Field,
  ID,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Any } from 'typeorm';
import { CoreOutput } from './core.dto';

@ArgsType()
export class PaginationInput {
  @Field(() => ID, { nullable: true })
  after?: string;

  @Field(() => ID, { nullable: true })
  before?: string;

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
  hasPreviousPage: Boolean;
  @Field((type) => String, { nullable: true })
  startCursor?: string;
  @Field((type) => String, { nullable: true })
  endCursor?: string;
}
