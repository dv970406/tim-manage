import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { CreateTeamInput, CreateTeamOutput } from './dtos/create-team.dto';
import { DeleteTeamInput, DeleteTeamOutput } from './dtos/delete-team.dto';
import { GetTeamInput, GetTeamOutput } from './dtos/get-team.dto';
import { GetTeamsInput, GetTeamsOutput } from './dtos/get-teams.dto';
import {
  NominateLeaderInput,
  NominateLeaderOutput,
} from './dtos/nominate-leader.dto';
import { UpdateTeamInput, UpdateTeamOutput } from './dtos/update-team.dto';
import { TeamRepository } from './team.repository';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamRepository)
    private readonly teamRepo: TeamRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}
  async getTeams(): Promise<GetTeamsOutput> {
    try {
      const findTeams = await this.teamRepo.find({
        order: { createdAt: 'DESC' },
      });
      return {
        ok: true,
        teams: findTeams,
      };
    } catch (error) {
      return {
        ok: false,
        error: '팀 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getTeam({ id: teamId }: GetTeamInput): Promise<GetTeamOutput> {
    try {
      const team = await this.teamRepo.findTeam({ teamId });

      return {
        ok: true,
        team,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '팀 조회에 실패했습니다.',
      };
    }
  }
  async createTeam({ team }: CreateTeamInput): Promise<CreateTeamOutput> {
    try {
      await this.teamRepo.checkExistTeamName({ team });

      const newTeam = await this.teamRepo.save({ team });
      return {
        ok: true,
        team: newTeam,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '팀 생성에 실패했습니다.',
      };
    }
  }

  async nominateLeader({
    id: teamId,
    userId,
  }: NominateLeaderInput): Promise<NominateLeaderOutput> {
    try {
      const findTeam = await this.teamRepo.findTeam({ teamId });
      const findUser = await this.userRepo.findUser({ userId });

      if (findUser.team.id !== findTeam.id) {
        throw new Error('팀에 속하지 않는 유저를 팀장으로 지명할 수 없습니다.');
      }

      await this.teamRepo.save([{ id: teamId, leader: findUser }]);

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '팀장 지명에 실패했습니다.',
      };
    }
  }

  async updateTeam({
    id: teamId,
    team,
  }: UpdateTeamInput): Promise<UpdateTeamOutput> {
    try {
      await this.teamRepo.checkExistTeamName({ team });

      await this.teamRepo.findTeam({
        teamId,
      });

      await this.teamRepo.save([{ id: teamId, team }]);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '팀 수정에 실패했습니다.',
      };
    }
  }
  async deleteTeam({ id: teamId }: DeleteTeamInput): Promise<DeleteTeamOutput> {
    try {
      await this.teamRepo.findTeam({
        teamId,
      });

      await this.teamRepo.delete({ id: teamId });
      return {
        ok: true,
        deletedTeamId: teamId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '팀 삭제에 실패했습니다.',
      };
    }
  }
}
