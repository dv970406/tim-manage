import {
  ArgsType,
  Field,
  ID,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { User } from 'src/user/entities/user.entity';

@InterfaceType({
  resolveType: async (id: string, { user }, cxz) => {
    return 'User';
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
