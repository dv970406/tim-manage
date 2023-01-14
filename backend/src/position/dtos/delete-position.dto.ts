import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Position } from '../entities/position.entity';

@InputType()
export class DeletePositionInput extends PickType(Position, ['_id']) {}

@ObjectType()
export class DeletePositionOutput extends CoreOutput {}