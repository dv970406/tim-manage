import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard, ManagerGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import {
  ConfirmVacationInput,
  ConfirmVacationOutput,
} from './dtos/confirm-vacation.dto';
import {
  CreateVacationInput,
  CreateVacationOutput,
} from './dtos/create-vacation.dto';
import {
  DeleteVacationInput,
  DeleteVacationOutput,
} from './dtos/delete-vacation.dto';
import { GetVacationInput, GetVacationOutput } from './dtos/get-vacation.dto';
import { GetVacationsOutput } from './dtos/get-vacations.dto';
import {
  UpdateVacationInput,
  UpdateVacationOutput,
} from './dtos/update-vacation.dto';
import { Vacation } from './entities/vacation.entity';
import { VacationService } from './vacation.service';

@Resolver((of) => Vacation)
export class VacationResolver {
  constructor(private readonly vacationService: VacationService) {}
  @Query((type) => GetVacationsOutput)
  getVacations(): Promise<GetVacationsOutput> {
    return this.vacationService.getVacations();
  }

  @Query((type) => GetVacationOutput)
  getVacation(
    @Args('input') getVacationInput: GetVacationInput,
  ): Promise<GetVacationOutput> {
    return this.vacationService.getVacation(getVacationInput);
  }

  @Mutation((type) => CreateVacationOutput)
  @UseGuards(LoginGuard)
  createVacation(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createVacationInput: CreateVacationInput,
  ): Promise<CreateVacationOutput> {
    return this.vacationService.createVacation(
      loggedInUser,
      createVacationInput,
    );
  }

  @Mutation((type) => ConfirmVacationOutput)
  @UseGuards(LoginGuard)
  confirmVacation(
    @LoggedInUser() loggedInUser: User,
    @Args('input') confirmVacationInput: ConfirmVacationInput,
  ): Promise<ConfirmVacationOutput> {
    return this.vacationService.confirmVacation(
      loggedInUser,
      confirmVacationInput,
    );
  }

  @Mutation((type) => UpdateVacationOutput)
  @UseGuards(LoginGuard)
  updateVacation(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updateVacationInput: UpdateVacationInput,
  ): Promise<UpdateVacationOutput> {
    return this.vacationService.updateVacation(
      loggedInUser,
      updateVacationInput,
    );
  }

  @Mutation((type) => DeleteVacationOutput)
  @UseGuards(LoginGuard)
  deleteVacation(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deleteVacationInput: DeleteVacationInput,
  ): Promise<DeleteVacationOutput> {
    return this.vacationService.deleteVacation(
      loggedInUser,
      deleteVacationInput,
    );
  }
}
