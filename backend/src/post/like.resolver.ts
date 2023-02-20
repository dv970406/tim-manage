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
import { User } from 'src/user/entities/user.entity';
import { GetMyLikesOutput } from './dtos/Like/get-myLikes.dto';
import { LikesConnection } from './dtos/like/like-pagination.dto';
import { ToggleLikeInput, ToggleLikeOutput } from './dtos/like/toggle-like.dto';
import { Like } from './entities/like.entity';
import { LikeService } from './like.service';

@Resolver((of) => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Query((type) => GetMyLikesOutput)
  @UseGuards(LoginGuard)
  getMyLikes(@LoggedInUser() loggedInUser: User): Promise<GetMyLikesOutput> {
    return this.likeService.getMyLikes(loggedInUser);
  }

  @Mutation((type) => ToggleLikeOutput)
  @UseGuards(LoginGuard)
  toggleLike(
    @LoggedInUser() loggedInUser: User,
    @Args('input') toggleLikeInput: ToggleLikeInput,
  ): Promise<ToggleLikeOutput> {
    return this.likeService.toggleLike(loggedInUser, toggleLikeInput);
  }
}
