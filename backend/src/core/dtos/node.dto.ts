import {
  ArgsType,
  Field,
  ID,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';

@InterfaceType({
  // node resolver에서 return한 것이 data 파라미터로 들어옴
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
