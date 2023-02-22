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
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { CommentsConnection } from 'src/post/dtos/comment/comment-pagination.dto';
import { LikesConnection } from 'src/post/dtos/like/like-pagination.dto';
import { PostsConnection } from 'src/post/dtos/post/post-pagination.dto';
import { AnswersConnection } from 'src/survey/dtos/answer/answer-pagination.dto';
import { VacationsConnection } from 'src/vacation/dtos/vacation-pagination.dto';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { DeleteUserInput, DeleteUserOutput } from './dtos/delete-user.dto';
import { GetMyInfoInput, GetMyInfoOutput } from './dtos/get-myInfo.dto';
import { GetUserInput, GetUserOutput } from './dtos/get-user.dto';
import { GetUsersInput, GetUsersOutput } from './dtos/get-users.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { SearchUsersInput, SearchUsersOutput } from './dtos/search-users.dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user.dto';
import {
  UpdateUserPasswordInput,
  UpdateUserPasswordOutput,
} from './dtos/update-userPassword.dto';
import { UsersConnection } from './dtos/user-pagination.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @ResolveField((type) => AnswersConnection)
  myAnswersConnection(
    @Parent() user: User,
    @Args() answersConnectionInput: ConnectionInput,
  ): Promise<AnswersConnection> {
    return this.userService.myAnswersConnection(user, answersConnectionInput);
  }
  @ResolveField((type) => VacationsConnection)
  myVacationsConnection(
    @Parent() user: User,
    @Args() vacationsConnectionInput: ConnectionInput,
  ): Promise<VacationsConnection> {
    return this.userService.myVacationsConnection(
      user,
      vacationsConnectionInput,
    );
  }
  @ResolveField((type) => PostsConnection)
  myPostsConnection(
    @Parent() user: User,
    @Args() postsConnectionInput: ConnectionInput,
  ): Promise<PostsConnection> {
    return this.userService.myPostsConnection(user, postsConnectionInput);
  }
  @ResolveField((type) => LikesConnection)
  myLikesConnection(
    @Parent() user: User,
    @Args() likesConnectionInput: ConnectionInput,
  ): Promise<LikesConnection> {
    return this.userService.myLikesConnection(user, likesConnectionInput);
  }
  @ResolveField((type) => CommentsConnection)
  myCommentsConnection(
    @Parent() user: User,
    @Args() commentsConnectionInput: ConnectionInput,
  ): Promise<CommentsConnection> {
    return this.userService.myCommentsConnection(user, commentsConnectionInput);
  }

  @Query((returns) => GetUsersOutput)
  getUsers(@Args() getUsersInput: GetUsersInput): Promise<GetUsersOutput> {
    return this.userService.getUsers(getUsersInput);
  }

  // @Query((returns) => SearchUsersOutput)
  // searchUsers(
  //   @Args() searchUsersInput: SearchUsersInput,
  // ): Promise<SearchUsersOutput> {
  //   return this.userService.searchUsers(searchUsersInput);
  // }

  @Query((returns) => GetUserOutput)
  @UseGuards(ManagerGuard)
  getUser(@Args() getUserInput: GetUserInput): Promise<GetUserOutput> {
    return this.userService.getUser(getUserInput);
  }

  @Query((returns) => GetMyInfoOutput)
  @UseGuards(LoginGuard)
  getMyInfo(
    @LoggedInUser() loggedInUser: User,
    @Args() { isAllInfo }: GetMyInfoInput,
  ): Promise<GetMyInfoOutput> | GetMyInfoOutput {
    // 내 정보 전부가 필요한 것이 아니라면 getMyInfo 서비스로 보내지 않고 바로 미들웨어에서 얻은 user정보 반환
    if (!isAllInfo)
      return {
        ok: true,
        user: loggedInUser,
      };
    return this.userService.getMyInfo(loggedInUser);
  }

  @Mutation((returns) => LoginOutput)
  login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.userService.login(loginInput);
  }

  @Mutation((returns) => CreateUserOutput)
  // @UseGuards(ManagerGuard)
  async createUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.userService.createUser(createUserInput);
  }

  @Mutation((returns) => UpdateUserOutput)
  @UseGuards(ManagerGuard)
  async updateUser(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updateUserInput: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    return this.userService.updateUser(loggedInUser, updateUserInput);
  }

  @Mutation((returns) => UpdateUserPasswordOutput)
  @UseGuards(LoginGuard)
  async updateUserPassword(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updateUserPasswordInput: UpdateUserPasswordInput,
  ): Promise<UpdateUserPasswordOutput> {
    return this.userService.updateUserPassword(
      loggedInUser,
      updateUserPasswordInput,
    );
  }

  @Mutation((returns) => DeleteUserOutput)
  @UseGuards(ManagerGuard)
  async deleteUser(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deleteUserInput: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    return this.userService.deleteUser(loggedInUser, deleteUserInput);
  }
}
