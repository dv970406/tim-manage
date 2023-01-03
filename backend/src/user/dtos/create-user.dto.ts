import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class CreateUserOutput extends CoreOutput {}
