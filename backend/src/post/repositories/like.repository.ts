import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Like } from '../entities/like.entity';

@CustomRepository(Like)
export class LikeRepository extends Repository<Like> {
  async findLike({ likeId }) {
    const findLike = await this.findOne({
      where: {
        id: likeId,
      },
      loadRelationIds: {
        relations: ['user'],
      },
    });
    if (!findLike) {
      throw new Error('존재하지 않는 좋아요입니다.');
    }

    return findLike;
  }
}
