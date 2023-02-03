import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import {
  CreateCommentInput,
  CreateCommentOutput,
} from './dtos/Comment/create-comment.dto';
import {
  DeleteCommentInput,
  DeleteCommentOutput,
} from './dtos/Comment/delete-comment.dto';
import { GetMyCommentsOutput } from './dtos/comment/get-myComments.dto';
import {
  UpdateCommentInput,
  UpdateCommentOutput,
} from './dtos/comment/update-comment.dto';
import { Post } from './entities/post.entity';
import { CommentRepository } from './repositories/comment.repository';
import { PostRepository } from './repositories/post.repository';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private readonly commentRepo: CommentRepository,
    @InjectRepository(PostRepository)
    private readonly postRepo: PostRepository,
  ) {}

  async countComments(post: Post): Promise<Number> {
    return this.commentRepo.countBy({
      post: {
        id: post.id,
      },
    });
  }
  async getMyComments(loggedInUser: User): Promise<GetMyCommentsOutput> {
    try {
      const findComments = await this.commentRepo.find({
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
        comments: findComments,
      };
    } catch (error) {
      return {
        ok: false,
        error: '댓글 리스트 조회에 실패했습니다.',
      };
    }
  }

  async createComment(
    loggedInUser: User,
    { postId, content }: CreateCommentInput,
  ): Promise<CreateCommentOutput> {
    try {
      if (!content) {
        throw new Error('댓글을 입력해주세요.');
      }
      const findPost = await this.postRepo.findPost({ postId });

      await this.commentRepo.save({
        content,
        user: loggedInUser,
        post: findPost,
      });
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '댓글 생성에 실패했습니다.',
      };
    }
  }

  // async updateComment(
  //   loggedInUser: User,
  //   { id: commentId, content }: UpdateCommentInput,
  // ): Promise<UpdateCommentOutput> {
  //   try {
  //     if (!content) {
  //       throw new Error('댓글을 입력해주세요.');
  //     }

  //     const findComment = await this.commentRepo.findComment({ commentId });
  //     if (loggedInUser.id !== findComment.user.id) {
  //       throw new Error('댓글의 소유자가 아닙니다.');
  //     }

  //     await this.commentRepo.save([{ id: commentId, content }]);
  //     return {
  //       ok: true,
  //     };
  //   } catch (error) {
  //     return {
  //       ok: false,
  //       error: error.message || '댓글 수정에 실패했습니다.',
  //     };
  //   }
  // }
  async deleteComment(
    loggedInUser: User,
    { id: commentId }: DeleteCommentInput,
  ): Promise<DeleteCommentOutput> {
    try {
      const findComment = await this.commentRepo.findComment({
        commentId,
      });

      if (loggedInUser.id !== findComment.userId) {
        throw new Error('댓글의 소유자가 아닙니다.');
      }

      await this.commentRepo.delete({ id: commentId });
      return {
        ok: true,
        deletedCommentId: commentId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '댓글 삭제에 실패했습니다.',
      };
    }
  }
}
