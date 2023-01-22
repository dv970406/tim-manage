import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from 'src/user/entities/user.entity';
import { Position } from '../entities/position.entity';

@InputType()
export class GetUsersOfPositionInput extends PickType(Position, ['id']) {}

@ObjectType()
export class GetUsersOfPositionOutput extends CoreOutput {
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
