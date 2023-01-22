import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class DeleteTeamInput extends PickType(Team, ['id']) {}

@ObjectType()
export class DeleteTeamOutput extends CoreOutput {}
