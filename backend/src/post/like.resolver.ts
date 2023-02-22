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
import { ToggleLikeInput, ToggleLikeOutput } from './dtos/like/toggle-like.dto';
import { Like } from './entities/like.entity';
import { LikeService } from './like.service';

@Resolver((of) => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Mutation((type) => ToggleLikeOutput)
  @UseGuards(LoginGuard)
  toggleLike(
    @LoggedInUser() loggedInUser: User,
    @Args('input') toggleLikeInput: ToggleLikeInput,
  ): Promise<ToggleLikeOutput> {
    return this.likeService.toggleLike(loggedInUser, toggleLikeInput);
  }
}
