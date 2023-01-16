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

  async countLikes(post: Post): Promise<Number> {
    return this.likeRepo.countBy({
      post: {
        _id: post._id,
      },
    });
  }

  async isLiked(loggedInUser: User, post: Post): Promise<Boolean> {
    return this.likeRepo.exist({
      where: {
        post: {
          _id: post._id,
        },
        user: {
          _id: loggedInUser._id,
        },
      },
    });
  }

  async getMyLikes(loggedInUser: User): Promise<GetMyLikesOutput> {
    try {
      const findLikes = await this.likeRepo.find({
        where: {
          user: {
            _id: loggedInUser._id,
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

      const findLike = await this.likeRepo.findOneBy({
        post: { _id: postId },
        user: { _id: loggedInUser._id },
      });
      if (findLike) {
        await this.likeRepo.delete({ _id: findLike._id });
      } else {
        await this.likeRepo.save({ user: loggedInUser, post: findPost });
      }

      return {
        ok: true,
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
  //   { _id: likeId }: DeleteLikeInput,
  // ): Promise<DeleteLikeOutput> {
  //   try {
  //     const findLike = await this.likeRepo.findLike({ likeId });
  //     if (loggedInUser._id !== findLike.user._id) {
  //       throw new Error('좋아요의 소유자가 아닙니다.');
  //     }

  //     await this.likeRepo.delete({ _id: likeId });
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
