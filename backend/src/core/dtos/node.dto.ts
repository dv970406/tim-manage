import {
  ArgsType,
  Field,
  ID,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';

@InterfaceType({
  resolveType: (obj) => obj.__typename,
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
