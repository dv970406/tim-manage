import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class UpdateTeamInput extends PickType(Team, ['id', 'team']) {}

@ObjectType()
export class UpdateTeamOutput extends CoreOutput {}
