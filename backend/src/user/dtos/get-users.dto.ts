import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import {
  PaginationInput,
  PaginationOutput,
} from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class GetUsersOutput extends CoreOutput {
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
