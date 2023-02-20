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
