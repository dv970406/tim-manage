import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ManagerGuard } from 'src/auth/auth.guard';
import {
  CreatePositionInput,
  CreatePositionOutput,
} from './dtos/create-position.dto';
import {
  DeletePositionInput,
  DeletePositionOutput,
} from './dtos/delete-position.dto';
import {
  GetUsersOfPositionInput,
  GetUsersOfPositionOutput,
} from './dtos/get-usersOfPosition.dto';
import { GetPositionsOutput } from './dtos/get-positions.dto';
import {
  UpdatePositionInput,
  UpdatePositionOutput,
} from './dtos/update-position.dto';
import { PositionService } from './position.service';
import { Position } from './entities/position.entity';

@Resolver((of) => Position)
export class PositionResolver {
  constructor(private readonly positionService: PositionService) {}
  @Query((type) => GetPositionsOutput)
  getPositions(): Promise<GetPositionsOutput> {
    return this.positionService.getPositions();
  }

  @Query((type) => GetUsersOfPositionOutput)
  getUsersOfPosition(
    @Args('input') getUsersOfPositionInput: GetUsersOfPositionInput,
  ): Promise<GetUsersOfPositionOutput> {
    return this.positionService.getUsersOfPosition(getUsersOfPositionInput);
  }

  @Mutation((type) => CreatePositionOutput)
  @UseGuards(ManagerGuard)
  createPosition(
    @Args('input') createPositionInput: CreatePositionInput,
  ): Promise<CreatePositionOutput> {
    return this.positionService.createPosition(createPositionInput);
  }
  @Mutation((type) => UpdatePositionOutput)
  @UseGuards(ManagerGuard)
  updatePosition(
    @Args('input') updatePositionInput: UpdatePositionInput,
  ): Promise<UpdatePositionOutput> {
    return this.positionService.updatePosition(updatePositionInput);
  }
  @Mutation((type) => DeletePositionOutput)
  @UseGuards(ManagerGuard)
  deletePosition(
    @Args('input') deletePositionInput: DeletePositionInput,
  ): Promise<DeletePositionOutput> {
    return this.positionService.deletePosition(deletePositionInput);
  }
}
