import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TeamService } from './Team.service';
import { CreateTeamInput, CreateTeamOutput } from './dtos/create-team.dto';
import { UpdateTeamInput, UpdateTeamOutput } from './dtos/update-team.dto';
import { DeleteTeamInput, DeleteTeamOutput } from './dtos/delete-team.dto';
import { GetTeamInput, GetTeamOutput } from './dtos/get-team.dto';
import { GetTeamsInput, GetTeamsOutput } from './dtos/get-teams.dto';
import { ManagerGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import {
  NominateLeaderInput,
  NominateLeaderOutput,
} from './dtos/nominate-leader.dto';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { Team } from './entities/team.entity';

@Resolver((of) => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query((type) => GetTeamsOutput)
  getTeams(): Promise<GetTeamsOutput> {
    return this.teamService.getTeams();
  }

  @Query((type) => GetTeamOutput)
  getTeam(@Args('input') getTeamInput: GetTeamInput): Promise<GetTeamOutput> {
    return this.teamService.getTeam(getTeamInput);
  }

  @Mutation((type) => CreateTeamOutput)
  @UseGuards(ManagerGuard)
  createTeam(
    @Args('input') createTeamInput: CreateTeamInput,
  ): Promise<CreateTeamOutput> {
    return this.teamService.createTeam(createTeamInput);
  }
  // @Mutation((type) => NominateLeaderOutput)
  // @UseGuards(ManagerGuard)
  // nominateLeader(
  //   @Args('input') nominateLeaderInput: NominateLeaderInput,
  // ): Promise<NominateLeaderOutput> {
  //   return this.teamService.nominateLeader(nominateLeaderInput);
  // }

  @Mutation((type) => UpdateTeamOutput)
  @UseGuards(ManagerGuard)
  updateTeam(
    @Args('input') updateTeamInput: UpdateTeamInput,
  ): Promise<UpdateTeamOutput> {
    return this.teamService.updateTeam(updateTeamInput);
  }
  @Mutation((type) => DeleteTeamOutput)
  @UseGuards(ManagerGuard)
  deleteTeam(
    @Args('input') deleteTeamInput: DeleteTeamInput,
  ): Promise<DeleteTeamOutput> {
    return this.teamService.deleteTeam(deleteTeamInput);
  }
}
