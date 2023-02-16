import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, PaginationInput } from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';
import { UserEdge, UsersPaginationFormat } from './user-pagination.dto';

@ArgsType()
export class GetUsersInput extends PaginationInput {}
@ObjectType()
export class GetUsersOutput extends CoreOutput {
  @Field((type) => [UserEdge])
  edges?: UserEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
