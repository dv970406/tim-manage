import { ArgsType, Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Node {
  @Field(() => ID)
  id: string;
}

@ArgsType()
export class NodeInput {
  @Field(() => ID)
  id: string;
}
