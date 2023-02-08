import {
  Field,
  ID,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';
@InputType()
export class UpdateTeamInput extends PickType(PartialType(Team), ['team']) {
  @Field((type) => ID)
  teamId: string;
  @Field((type) => ID, { nullable: true })
  leaderId?: string;
}

@ObjectType()
export class UpdateTeamOutput extends CoreOutput {
  @Field((type) => Team, { nullable: true })
  team?: Team;
}
