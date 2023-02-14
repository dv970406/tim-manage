import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserPasswordInput extends PickType(User, ['password']) {}

@ObjectType()
export class UpdateUserPasswordOutput extends CoreOutput {}
