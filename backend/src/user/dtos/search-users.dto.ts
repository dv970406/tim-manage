import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import {
  PaginationInput,
  PaginationOutput,
} from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';

@InputType()
export class SearchUsersInput extends PaginationInput {
  @Field((type) => String, { nullable: true })
  keyword?: string;
}

@ObjectType()
export class SearchUsersOutput extends PaginationOutput {
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
