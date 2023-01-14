import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@CustomRepository(Team)
export class TeamRepository extends Repository<Team> {
  async findTeam({ teamId }) {
    const team = await this.findOne({
      where: { _id: teamId },
      relations: {
        users: true,
      },
    });
    if (!team) {
      throw new Error('존재하지 않는 팀입니다.');
    }

    return team;
  }

  async checkExistTeamName({ team }) {
    if (!team) {
      throw new Error('팀명을 입력해주세요.');
    }

    const isExistTeamName = await this.countBy({ team });
    if (isExistTeamName) {
      throw new Error('이미 존재하는 팀명입니다.');
    }
  }
}
