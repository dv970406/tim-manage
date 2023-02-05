import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async findComment({ commentId }) {
    const findComment = await this.findOne({
      where: {
        id: commentId,
      },
      loadRelationIds: {
        relations: ['user', 'post'],
      },
    });
    if (!findComment) {
      throw new Error('존재하지 않는 댓글입니다.');
    }

    return findComment;
  }
}
