import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard, ManagerGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { CommentService } from './comment.service';
import {
  CreateCommentInput,
  CreateCommentOutput,
} from './dtos/comment/create-comment.dto';
import {
  DeleteCommentInput,
  DeleteCommentOutput,
} from './dtos/comment/delete-comment.dto';
import { GetMyCommentsOutput } from './dtos/comment/get-myComments.dto';
import { Comment } from './entities/comment.entity';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query((type) => GetMyCommentsOutput)
  @UseGuards(LoginGuard)
  getMyComments(
    @LoggedInUser() loggedInUser: User,
  ): Promise<GetMyCommentsOutput> {
    return this.commentService.getMyComments(loggedInUser);
  }

  @Mutation((type) => CreateCommentOutput)
  @UseGuards(LoginGuard)
  createComment(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createCommentInput: CreateCommentInput,
  ): Promise<CreateCommentOutput> {
    return this.commentService.createComment(loggedInUser, createCommentInput);
  }

  @Mutation((type) => DeleteCommentOutput)
  @UseGuards(LoginGuard)
  deleteComment(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deleteCommentInput: DeleteCommentInput,
  ): Promise<DeleteCommentOutput> {
    return this.commentService.deleteComment(loggedInUser, deleteCommentInput);
  }
}
