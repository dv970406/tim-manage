import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Position } from './entities/position.entity';

@CustomRepository(Position)
export class PositionRepository extends Repository<Position> {
  async findPosition({ positionId }) {
    const position = await this.findOne({
      where: { id: positionId },
      relations: {
        users: true,
      },
    });
    if (!position) {
      throw new Error('존재하지 않는 직책입니다.');
    }

    return position;
  }

  async checkExistPositionName({ position }) {
    if (!position) {
      throw new Error('직책명을 입력해주세요.');
    }
    const isExistPositionName = await this.countBy({ position });
    if (isExistPositionName) {
      throw new Error('이미 존재하는 직책명입니다.');
    }
  }
}
