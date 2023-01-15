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
    _id: vacationId,
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
    { startDate, finishDate, isHalf }: CreateVacationInput,
  ): Promise<CreateVacationOutput> {
    try {
      if (!startDate || !finishDate) {
        throw new Error('기간을 입력해주세요.');
      }

      const start = +new Date(startDate).getDate();
      const finish = +new Date(finishDate).getDate();

      if (isHalf && start !== finish) {
        throw new Error('반차는 1일 범위 내 지정 후 체크해주세요.');
      }

      const duration = isHalf ? 0.5 : finish - start + 1;
      const remainingVacation = +loggedInUser.availableVacation - +duration;

      if (remainingVacation < 0) {
        throw new Error('남은 연차가 없습니다.');
      }

      await this.vacationRepo.save({
        startDate,
        finishDate,
        duration,
        user: loggedInUser,
        confirmed: {
          byManager: false,
          byCeo: false,
          byLeader: false,
        },
      });
      await this.userRepo.save([
        {
          _id: loggedInUser._id,
          availableVacation: remainingVacation,
        },
      ]);

      return {
        ok: true,
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
    { _id: vacationId }: ConfirmVacationInput,
  ): Promise<ConfirmVacationOutput> {
    try {
      const findVacation = await this.vacationRepo.findVacation({ vacationId });

      if (
        !loggedInUser.isManager &&
        findVacation.user.team.leaderId !== loggedInUser._id &&
        loggedInUser.position.position !== POSITION_CEO
      ) {
        throw new Error('휴가를 승인할 권한이 없습니다.');
      }

      if (loggedInUser.position.position === POSITION_CEO) {
        findVacation.confirmed.byCeo = true;
      } else if (findVacation.user.team.leaderId === loggedInUser._id) {
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

  async deleteVacation(
    loggedInUser: User,
    { _id: vacationId }: DeleteVacationInput,
  ): Promise<DeleteVacationOutput> {
    try {
      const findVacation = await this.vacationRepo.findVacation({
        vacationId,
      });

      if (loggedInUser._id !== findVacation.userId) {
        throw new Error('휴가의 소유자가 아닙니다.');
      }

      const remaniningVacation =
        +loggedInUser.availableVacation + +findVacation.duration;

      await this.vacationRepo.delete({ _id: vacationId });
      await this.userRepo.save([
        {
          _id: loggedInUser._id,
          availableVacation: remaniningVacation,
        },
      ]);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '휴가 삭제에 실패했습니다.',
      };
    }
  }
}
