import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { POSITION_CEO } from 'src/core/variables/position';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
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
import { VacationRepository } from './vacation.repository';

// const TEST_START_DATE = 1641081600000;
// const TEST_FINISH_DATE = 1641254400000;
@Injectable()
export class VacationService {
  constructor(
    @InjectRepository(VacationRepository)
    private readonly vacationRepo: VacationRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}
  async getVacations(): Promise<GetVacationsOutput> {
    try {
      const vacations = await this.vacationRepo.find({
        order: { createdAt: 'DESC' },
        relations: ['user'],
      });
      return {
        ok: true,
        vacations,
      };
    } catch (error) {
      return {
        ok: false,
        error: '휴가 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getVacation({
    id: vacationId,
  }: GetVacationInput): Promise<GetVacationOutput> {
    try {
      const vacation = await this.vacationRepo.findVacation({ vacationId });

      return {
        ok: true,
        vacation,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 조회에 실패했습니다.',
      };
    }
  }

  async createVacation(
    loggedInUser: User,
    { startDate, endDate, isHalf }: CreateVacationInput,
  ): Promise<CreateVacationOutput> {
    try {
      if (!startDate || !endDate) {
        throw new Error('기간을 입력해주세요.');
      }
      if (startDate > endDate) {
        throw new Error('기간을 형식을 확인해주세요.');
      }

      const duration = await this.vacationRepo.getDuration({
        startDate,
        endDate,
        isHalf,
      });

      const remainingVacation = +loggedInUser.availableVacation - +duration;

      if (remainingVacation < 0) {
        throw new Error('남은 연차가 없습니다.');
      }

      const newVacation = await this.vacationRepo.save({
        startDate,
        endDate,
        duration,
        user: loggedInUser,
        isHalf,
        confirmed: {
          byManager: false,
          byCeo: false,
          byLeader: false,
        },
      });
      await this.userRepo.save([
        {
          id: loggedInUser.id,
          availableVacation: remainingVacation,
        },
      ]);

      return {
        ok: true,
        vacation: newVacation,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 생성에 실패했습니다.',
      };
    }
  }

  async confirmVacation(
    loggedInUser: User,
    { id: vacationId }: ConfirmVacationInput,
  ): Promise<ConfirmVacationOutput> {
    try {
      const findVacation = await this.vacationRepo.findVacation({ vacationId });

      if (
        !loggedInUser.isManager &&
        findVacation.user.team.leaderId !== loggedInUser.id &&
        loggedInUser.position.position !== POSITION_CEO
      ) {
        throw new Error('휴가를 승인할 권한이 없습니다.');
      }

      if (loggedInUser.position.position === POSITION_CEO) {
        findVacation.confirmed.byCeo = true;
      } else if (findVacation.user.team.leaderId === loggedInUser.id) {
        findVacation.confirmed.byLeader = true;
      } else if (loggedInUser.isManager) {
        findVacation.confirmed.byManager = true;
      }

      await this.vacationRepo.save(findVacation);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 승인에 실패했습니다.',
      };
    }
  }

  async updateVacation(
    loggedInUser: User,
    { id: vacationId, startDate, endDate, isHalf }: UpdateVacationInput,
  ): Promise<UpdateVacationOutput> {
    try {
      const findVacation = await this.vacationRepo.findVacation({
        vacationId,
      });

      if (loggedInUser.id !== findVacation.userId) {
        throw new Error('휴가의 소유자가 아닙니다.');
      }

      const duration = await this.vacationRepo.getDuration({
        startDate,
        endDate,
        isHalf,
      });

      let recoveryVacation = 0;
      if (duration < findVacation.duration) {
        recoveryVacation += findVacation.duration - duration;
      } else if (duration > findVacation.duration) {
        recoveryVacation = findVacation.duration - duration;
      }

      // 현재 사용가능한 연차일수에 해당 휴가의 수정 전 기간만큼은 회복시키고 다시 사용한 일수만큼 뺀다.
      await this.userRepo.save([
        {
          id: loggedInUser.id,
          availableVacation: +loggedInUser.availableVacation + recoveryVacation,
        },
      ]);

      if (startDate) {
        findVacation.startDate = startDate;
      }
      if (endDate) {
        findVacation.endDate = endDate;
      }
      if (isHalf) {
        findVacation.isHalf = isHalf;
      }
      if (startDate && endDate) {
        findVacation.duration = duration;
      }
      const updatedVacation = await this.vacationRepo.save(findVacation);

      return {
        ok: true,
        vacation: updatedVacation,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 수정에 실패했습니다.',
      };
    }
  }

  async deleteVacation(
    loggedInUser: User,
    { id: vacationId }: DeleteVacationInput,
  ): Promise<DeleteVacationOutput> {
    try {
      const findVacation = await this.vacationRepo.findVacation({
        vacationId,
      });

      if (loggedInUser.id !== findVacation.userId) {
        throw new Error('휴가의 소유자가 아닙니다.');
      }

      const remaniningVacation =
        +loggedInUser.availableVacation + +findVacation.duration;

      await this.vacationRepo.delete({ id: vacationId });
      await this.userRepo.save([
        {
          id: loggedInUser.id,
          availableVacation: remaniningVacation,
        },
      ]);
      return {
        ok: true,
        deletedVacationId: vacationId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 삭제에 실패했습니다.',
      };
    }
  }
}
