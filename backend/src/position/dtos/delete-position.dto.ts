import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Position } from '../entities/position.entity';

@InputType()
export class DeletePositionInput extends PickType(Position, ['id']) {}

@ObjectType()
export class DeletePositionOutput extends CoreOutput {
  @Field((type) => ID, { nullable: true })
  deletedPositionId?: string;
}
