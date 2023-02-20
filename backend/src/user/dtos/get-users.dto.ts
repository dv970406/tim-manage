import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { PageInfo, ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';
import { UserEdge, UsersConnection } from './user-pagination.dto';

@ArgsType()
export class GetUsersInput extends ConnectionInput {}
@ObjectType()
export class GetUsersOutput extends CoreOutput {
  @Field((type) => [UserEdge])
  edges?: UserEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
