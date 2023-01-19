import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Vacation } from '../entities/vacation.entity';

@InputType()
export class ConfirmVacationInput extends PickType(Vacation, ['id']) {}

@ObjectType()
export class ConfirmVacationOutput extends CoreOutput {}
