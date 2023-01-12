import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Position } from '../entities/position.entity';

@InputType()
export class CreatePositionInput extends PickType(Position, ['position']) {}

@ObjectType()
export class CreatePositionOutput extends CoreOutput {}
