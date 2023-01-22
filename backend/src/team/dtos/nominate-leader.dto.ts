import { Field, ID, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Team } from '../entities/team.entity';

@InputType()
export class NominateLeaderInput extends PickType(Team, ['id']) {
  @Field((type) => ID)
  userId: string;
}

@ObjectType()
export class NominateLeaderOutput extends CoreOutput {}
