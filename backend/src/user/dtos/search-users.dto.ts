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
import { PageInfo, ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';
import { UserEdge, UsersConnection } from './user-pagination.dto';

@ArgsType()
export class SearchUsersInput extends ConnectionInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}
@ObjectType()
export class SearchUsersOutput extends CoreOutput {
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
