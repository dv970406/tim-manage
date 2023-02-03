import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class CreateTeamInput extends PickType(Team, ['team']) {}

@ObjectType()
export class CreateTeamOutput extends CoreOutput {
  @Field((type) => Team, { nullable: true })
  team?: Team;
}
