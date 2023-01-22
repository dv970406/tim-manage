import { CustomRepository } from 'src/core/repository/custom.decorator';
import { POSITION_CEO } from 'src/core/variables/position';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async findUser({ userId }) {
    const findUser = await this.findOne({
      where: { id: userId },
      relations: {
        position: true,
        team: true,
      },
    });
    if (!findUser) {
      throw new Error('존재하지 않는 유저입니다.');
    }

    return findUser;
  }

  protectManagerAndCEO({ findUser, loggedInUser, type }) {
    if (findUser.position.position === POSITION_CEO) {
      throw new Error(`${type}할 수 없는 유저입니다.`);
    }

    if (
      loggedInUser.position.position !== POSITION_CEO &&
      findUser.isManager &&
      loggedInUser.id !== findUser.id
    ) {
      throw new Error(`관리자인 유저의 계정을 ${type}할 수 없습니다.`);
    }
  }
}
