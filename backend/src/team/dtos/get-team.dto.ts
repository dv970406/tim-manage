import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class GetTeamInput extends PickType(Team, ['_id']) {}

@ObjectType()
export class GetTeamOutput extends CoreOutput {
  @Field((type) => Team, { nullable: true })
  team?: Team;
}
