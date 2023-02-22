import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
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
import { Comment } from './entities/comment.entity';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @ResolveField((type) => Boolean)
  isMyComment(
    @LoggedInUser() loggedInUser: User,
    @Parent() comment: Comment,
  ): Promise<boolean> {
    return this.commentService.isMyComment(loggedInUser, comment);
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
