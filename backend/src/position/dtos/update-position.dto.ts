import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Position } from '../entities/position.entity';

@InputType()
export class UpdatePositionInput extends PickType(Position, [
  '_id',
  'position',
]) {}

@ObjectType()
export class UpdatePositionOutput extends CoreOutput {}
