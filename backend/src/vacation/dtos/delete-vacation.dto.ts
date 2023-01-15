import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Vacation } from '../entities/vacation.entity';

@InputType()
export class DeleteVacationInput extends PickType(Vacation, ['_id']) {}

@ObjectType()
export class DeleteVacationOutput extends CoreOutput {}
