import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { User } from 'src/user/entities/user.entity';
import { Position } from '../entities/position.entity';

@InputType()
export class GetPositionInput extends PickType(Position, ['id']) {}

@ObjectType()
export class GetPositionOutput extends CoreOutput {
  @Field((type) => Position, { nullable: true })
  position?: Position;
}
