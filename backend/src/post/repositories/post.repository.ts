import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {
  async findPost({ postId }) {
    const post = await this.findOne({
      where: {
        id: postId,
      },
      relations: {
        user: true,
        comments: {
          user: true,
        },
      },
      order: {
        comments: {
          createdAt: 'DESC',
        },
      },
    });
    if (!post) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    return post;
  }
}
