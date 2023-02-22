import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from 'src/user/entities/user.entity';
import { LessThan } from 'typeorm';
import { CommentsConnection } from './dtos/comment/comment-pagination.dto';
import {
  CreateCommentInput,
  CreateCommentOutput,
} from './dtos/Comment/create-comment.dto';
import {
  DeleteCommentInput,
  DeleteCommentOutput,
} from './dtos/Comment/delete-comment.dto';
import { Comment } from './entities/comment.entity';
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

  async isMyComment(loggedInUser: User, comment: Comment): Promise<boolean> {
    return comment.user.id === loggedInUser.id;
  }
  async countComments(post: Post): Promise<number> {
    return this.commentRepo.countBy({
      post: {
        id: post.id,
      },
    });
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

      const newComment = await this.commentRepo.save({
        content,
        user: loggedInUser,
        post: findPost,
      });

      return {
        ok: true,
        comment: newComment,
        postId,
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
        postId: findComment.postId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '댓글 삭제에 실패했습니다.',
      };
    }
  }
}
