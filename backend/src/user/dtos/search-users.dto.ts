import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, PaginationInput } from 'src/core/dtos/pagination.dto';
import { UserEdge, UsersPaginationFormat } from './user-pagination.dto';

@ArgsType()
export class SearchUsersInput extends PaginationInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}
@ObjectType()
export class SearchUsersOutput extends CoreOutput {
  @Field((type) => [UserEdge])
  edges?: UserEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
