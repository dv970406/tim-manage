import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { ManagerGuard } from 'src/auth/auth.guard';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { DeleteUserInput, DeleteUserOutput } from './dtos/delete-user.dto';
import { GetMyInfoOutput } from './dtos/get-myInfo.dto';
import { GetUserInput, GetUserOutput } from './dtos/get-user.dto';
import { GetUsersOutput } from './dtos/get-users.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query((returns) => GetUsersOutput)
  getUsers(): Promise<GetUsersOutput> {
    return this.userService.getUsers();
  }

  @Query((returns) => GetUserOutput)
  getUser(@Args('input') getUserInput: GetUserInput): Promise<GetUserOutput> {
    return this.userService.getUser(getUserInput);
  }

  @Query((returns) => GetUserOutput)
  getMyInfo(@LoggedInUser() loggedInUser: User): GetMyInfoOutput {
    return {
      ok: true,
      user: loggedInUser,
    };
  }

  @Mutation((returns) => LoginOutput)
  login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.userService.login(loginInput);
  }

  @Mutation((returns) => CreateUserOutput)
  @UseGuards(ManagerGuard)
  async createUser(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.userService.createUser(loggedInUser, createUserInput);
  }

  @Mutation((returns) => UpdateUserOutput)
  @UseGuards(ManagerGuard)
  async updateUser(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updateUserInput: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    return this.userService.updateUser(loggedInUser, updateUserInput);
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
