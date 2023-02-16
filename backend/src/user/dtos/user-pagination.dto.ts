import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class UsersPaginationFormat {
  @Field((type) => [UserEdge])
  edges?: UserEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
@ObjectType()
export class UserEdge {
  @Field((type) => ID)
  cursor: string;

  @Field((type) => User)
  node: User;
}
