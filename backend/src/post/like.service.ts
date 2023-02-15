import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ToggleLikeInput, ToggleLikeOutput } from './dtos/like/toggle-like.dto';
import { GetMyLikesOutput } from './dtos/like/get-myLikes.dto';
import { Post } from './entities/post.entity';
import { LikeRepository } from './repositories/like.repository';
import { PostRepository } from './repositories/post.repository';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeRepository)
    private readonly likeRepo: LikeRepository,
    @InjectRepository(PostRepository)
    private readonly postRepo: PostRepository,
  ) {}

  async countLikes(post: Post): Promise<number> {
    return this.likeRepo.countBy({
      post: {
        id: post.id,
      },
    });
  }

  async isLiked(loggedInUser: User, post: Post): Promise<boolean> {
    return this.likeRepo.exist({
      where: {
        post: {
          id: post.id,
        },
        user: {
          id: loggedInUser.id,
        },
      },
    });
  }

  async getMyLikes(loggedInUser: User): Promise<GetMyLikesOutput> {
    try {
      const findLikes = await this.likeRepo.find({
        where: {
          user: {
            id: loggedInUser.id,
          },
        },
        order: { createdAt: 'DESC' },
        relations: {
          post: true,
        },
      });
      return {
        ok: true,
        likes: findLikes,
      };
    } catch (error) {
      return {
        ok: false,
        error: '좋아요 리스트 조회에 실패했습니다.',
      };
    }
  }

  async toggleLike(
    loggedInUser: User,
    { postId }: ToggleLikeInput,
  ): Promise<ToggleLikeOutput> {
    try {
      const findPost = await this.postRepo.findPost({ postId });

      let findLike = await this.likeRepo.findOne({
        where: {
          post: { id: postId },
          user: { id: loggedInUser.id },
        },
        relations: {
          post: true,
        },
      });
      if (findLike) {
        await this.likeRepo.delete({ id: findLike.id });
      } else {
        findLike = await this.likeRepo.save({
          user: loggedInUser,
          post: findPost,
        });
      }

      return {
        ok: true,
        like: findLike,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '좋아요 토글에 실패했습니다.',
      };
    }
  }

  // async deleteLike(
  //   loggedInUser: User,
  //   { id: likeId }: DeleteLikeInput,
  // ): Promise<DeleteLikeOutput> {
  //   try {
  //     const findLike = await this.likeRepo.findLike({ likeId });
  //     if (loggedInUser.id !== findLike.user.id) {
  //       throw new Error('좋아요의 소유자가 아닙니다.');
  //     }

  //     await this.likeRepo.delete({ id: likeId });
  //     return {
  //       ok: true,
  //     };
  //   } catch (error) {
  //     return {
  //       ok: false,
  //       error: error.message || '좋아요 삭제에 실패했습니다.',
  //     };
  //   }
  // }
}
