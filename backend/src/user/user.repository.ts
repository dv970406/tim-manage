import { CustomRepository } from 'src/core/repository/custom.decorator';
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

  protectManagerAndCEO({ targetUser, loggedInUser, type }) {
    if (targetUser.position.position === '대표') {
      throw new Error(`${type}할 수 없는 유저입니다.`);
    }

    if (
      loggedInUser.position.position !== '대표' &&
      targetUser.isManager &&
      loggedInUser.id !== targetUser.id
    ) {
      throw new Error(`관리자인 유저의 계정을 ${type}할 수 없습니다.`);
    }
  }
}
