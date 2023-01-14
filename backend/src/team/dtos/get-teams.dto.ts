import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class GetTeamsInput {}

@ObjectType()
export class GetTeamsOutput extends CoreOutput {
  @Field((type) => [Team], { nullable: true })
  teams?: Team[];
}
