import {
  ArgsType,
  Field,
  ID,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';
import { createConnection } from 'net';
import { Post } from 'src/post/entities/post.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, QueryBuilder } from 'typeorm';

@InterfaceType({
  resolveType: async (data) => {
    if ('email' in data) {
      return 'User';
    } else {
      return 'Room';
    }
  },
})
export class Node {
  @Field(() => ID)
  id: string;
}

@ArgsType()
export class NodeInput {
  @Field(() => ID)
  id: string;
}
