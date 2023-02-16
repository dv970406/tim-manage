import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard, ManagerGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { CommentService } from './comment.service';
import { CreatePostInput, CreatePostOutput } from './dtos/post/create-post.dto';
import { DeletePostInput, DeletePostOutput } from './dtos/post/delete-post.dto';
import { GetPostInput, GetPostOutput } from './dtos/post/get-post.dto';
import { GetPostsInput, GetPostsOutput } from './dtos/post/get-posts.dto';
import {
  SearchPostsInput,
  SearchPostsOutput,
} from './dtos/post/search-posts.dto';
import { UpdatePostInput, UpdatePostOutput } from './dtos/post/update-post.dto';
import { Post } from './entities/post.entity';
import { LikeService } from './like.service';
import { PostService } from './post.service';

@Resolver((of) => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly likeService: LikeService,
    private readonly commentService: CommentService,
  ) {}

  @ResolveField((type) => Boolean)
  isMyPost(
    @LoggedInUser() loggedInUser: User,
    @Parent() post: Post,
  ): Promise<boolean> {
    return this.postService.isMyPost(loggedInUser, post);
  }

  @ResolveField((type) => Number)
  countLikes(@Parent() post: Post): Promise<number> {
    return this.likeService.countLikes(post);
  }

  @ResolveField((type) => Boolean)
  isLiked(
    @LoggedInUser() loggedInUser: User,
    @Parent() post: Post,
  ): Promise<boolean> {
    return this.likeService.isLiked(loggedInUser, post);
  }

  @ResolveField((type) => Number)
  countComments(@Parent() post: Post): Promise<number> {
    return this.commentService.countComments(post);
  }

  @Query((type) => GetPostsOutput)
  getPosts(@Args() getPostsInput: GetPostsInput): Promise<GetPostsOutput> {
    return this.postService.getPosts(getPostsInput);
  }

  @Query((returns) => SearchPostsOutput)
  searchPosts(
    @Args('input') searchPostsInput: SearchPostsInput,
  ): Promise<SearchPostsOutput> {
    return this.postService.searchPosts(searchPostsInput);
  }

  @Query((type) => GetPostOutput)
  getPost(@Args('input') getPostInput: GetPostInput): Promise<GetPostOutput> {
    return this.postService.getPost(getPostInput);
  }

  @Mutation((type) => CreatePostOutput)
  @UseGuards(LoginGuard)
  createPost(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createPostInput: CreatePostInput,
  ): Promise<CreatePostOutput> {
    return this.postService.createPost(loggedInUser, createPostInput);
  }
  @Mutation((type) => UpdatePostOutput)
  @UseGuards(LoginGuard)
  updatePost(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updatePostInput: UpdatePostInput,
  ): Promise<UpdatePostOutput> {
    return this.postService.updatePost(loggedInUser, updatePostInput);
  }
  @Mutation((type) => DeletePostOutput)
  @UseGuards(LoginGuard)
  deletePost(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deletePostInput: DeletePostInput,
  ): Promise<DeletePostOutput> {
    return this.postService.deletePost(loggedInUser, deletePostInput);
  }
}
