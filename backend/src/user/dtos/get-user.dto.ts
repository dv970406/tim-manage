import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from '../entities/user.entity';

@ArgsType()
export class GetUserInput extends ConnectionInput {
  @Field((type) => ID)
  userId: string;
}

@ObjectType()
export class GetUserOutput extends CoreOutput {
  @Field((type) => User, { nullable: true })
  user?: User;
}
