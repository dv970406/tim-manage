import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Node, NodeInput } from '../dtos/node.dto';

@Resolver((of) => Node)
export class NodeResolver {
  @Query((type) => ID)
  node(@Args() { id }: NodeInput) {
    return id;
  }
}
