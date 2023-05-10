import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { DB_TABLE } from 'src/core/variables/constants';
import { POSITION_CEO } from 'src/core/variables/position';
import { NotificationRepository } from 'src/notification/notification.repository';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { pubsub, TRIGGER_RECEIVE_NOTIFICATION } from 'src/utils/subscription';
import { LessThan, MoreThan } from 'typeorm';
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
import { GetUnConfirmedByMeVacationsOutput } from './dtos/get-unConfirmedByMeVacations.dto';
import { GetVacationInput, GetVacationOutput } from './dtos/get-vacation.dto';
import { GetVacationsOutput } from './dtos/get-vacations.dto';
import {
  UpdateVacationInput,
  UpdateVacationOutput,
} from './dtos/update-vacation.dto';
import { VacationsConnection } from './dtos/vacation-pagination.dto';
import { VacationRepository } from './vacation.repository';

@Injectable()
export class VacationService {
  constructor(
    @InjectRepository(VacationRepository)
    private readonly vacationRepo: VacationRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepo: NotificationRepository,
  ) {}

  async getVacations(): Promise<GetVacationsOutput> {
    try {
      const todayMonth = new Date().getMonth();

      const beforeTwoMonth = new Date(new Date().setMonth(todayMonth - 2));
      const afterTwoMonth = new Date(new Date().setMonth(todayMonth + 2));

      const findVacations = await this.vacationRepo.find({
        order: { startDate: 'ASC' },
        relations: {
          user: {
            team: true,
            position: true,
          },
        },
        where: {
          startDate: MoreThan(beforeTwoMonth),
          endDate: LessThan(afterTwoMonth),
        },
      });

      return {
        ok: true,
        vacations: findVacations,
      };
    } catch (error) {
      return {
        ok: false,
        error: '휴가 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getUnConfirmedByMeVacations(
    loggedInUser: User,
  ): Promise<GetUnConfirmedByMeVacationsOutput> {
    try {
      let unConfirmedByMeVacations = await this.vacationRepo.find({
        // where: {
        //   startDate: MoreThan(new Date()),
        // },
        order: {
          createdAt: 'DESC',
        },
        relations: {
          user: {
            team: true,
            position: true,
          },
        },
      });

      //confirmed가 column이 아니라서 DB에서 이렇게 가져올 수는 없더라
      // if (loggedInUser.position.position === POSITION_CEO) {
      //   unConfirmedByMeVacations = await this.vacationRepo.find({
      //     where: {
      //       startDate: MoreThan(new Date()),
      //       // confirmed: {
      //       //   byCeo: false,
      //       // },
      //     },
      //     order: {
      //       createdAt: 'ASC',
      //     },
      //   });
      // }

      const amICeo = loggedInUser.position.position === POSITION_CEO;
      if (amICeo) {
        unConfirmedByMeVacations = unConfirmedByMeVacations.filter(
          (vacation) => !vacation.confirmed.byCeo,
        );
      }
      // 아래 조건 순서대로 해야 manager이면서 leader인 경우 leader로 우선 인식되게 할 수 있음
      else if (loggedInUser.team.leaderId === loggedInUser.id && !amICeo) {
        // 리더인 경우 본인 팀의 팀원들의 미승인 휴가만 조회할 수 있게함
        unConfirmedByMeVacations = unConfirmedByMeVacations.filter(
          (vacation) =>
            vacation.user.team.leaderId === loggedInUser.id &&
            !vacation.confirmed.byLeader,
        );
      } else if (loggedInUser.isManager && !amICeo) {
        unConfirmedByMeVacations = unConfirmedByMeVacations.filter(
          (vacation) => !vacation.confirmed.byManager,
        );
      }
      // unConfirmedByMeVacations=await this.vacationRepo.find({
      // 위처럼 안하고 여기 안에서 조건 작성하면 일반 유저들도 데이터 받게 되잖아. 물론 프론트에서 접근 못하게 막아는 놓겠지만
      //   where: {
      //     startDate: MoreThan(new Date()),
      //     user: {
      //       team: {
      //         leaderId: loggedInUser.id,
      //       },
      //     },
      //     confirmed: {
      //       byLeader: false,
      //     },
      //   },
      //   order: {
      //     createdAt: 'ASC',
      //   },
      // });

      return {
        ok: true,
        vacations: unConfirmedByMeVacations,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '미승인 휴가를 조회할 수 없습니다.',
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
        throw new Error('기간과 형식을 확인해주세요.');
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

      let confirmed = {
        byManager: false,
        byCeo: false,
        byLeader: false,
      };
      if (loggedInUser.position.position === POSITION_CEO) {
        confirmed.byCeo = true;
      } else if (loggedInUser.team.leaderId === loggedInUser.id) {
        confirmed.byLeader = true;
      } else if (loggedInUser.isManager) {
        confirmed.byManager = true;
      }
      const newVacation = await this.vacationRepo.save({
        startDate,
        endDate,
        duration,
        user: loggedInUser,
        isHalf,
        confirmed,
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

      const confirmedVacation = await this.vacationRepo.save(findVacation);

      const newNotification = await this.notificationRepo.save({
        user: confirmedVacation.user,
        confirmedByWho: loggedInUser,
        confirmedVacation: confirmedVacation,
      });
      pubsub.publish(TRIGGER_RECEIVE_NOTIFICATION, {
        receiveNotification: {
          ok: true,
          edge: {
            node: {
              ...newNotification,
            },
            cursor: confirmedVacation.createdAt,
          },
        }, //confirmedVacation,
      });

      return {
        ok: true,
        vacation: confirmedVacation,
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
    { vacationId, startDate, endDate, isHalf }: UpdateVacationInput,
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
      // 받은 isHalf가 false일 때만 작동
      if (isHalf === false) {
        findVacation.isHalf = isHalf;
      }
      if (startDate && endDate) {
        findVacation.duration = duration;
      }

      const targetUser = await this.userRepo.findUser({
        userId: loggedInUser.id,
      });
      findVacation.user = targetUser;

      // 수정시 모든 승인 해제
      findVacation.confirmed.byCeo = false;
      findVacation.confirmed.byLeader = false;
      findVacation.confirmed.byManager = false;

      const updatedVacation = await this.vacationRepo.save(findVacation);

      const notificationsIdOfVacation = await this.notificationRepo.find({
        where: {
          confirmedVacation: {
            id: updatedVacation.id,
          },
        },
        select: {
          id: true,
        },
      });

      // 수정 시 그 휴가와 얽혀있는 모든 Notifications 삭제
      await this.notificationRepo.delete({
        confirmedVacation: { id: updatedVacation.id },
      });
      return {
        ok: true,
        vacation: updatedVacation,
        notificationsIdOfVacation: notificationsIdOfVacation.map(
          (notification) => notification.id,
        ),
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

      const findNotificationOfTargetVacation =
        await this.notificationRepo.findBy({
          confirmedVacation: { id: vacationId },
        });

      findNotificationOfTargetVacation.forEach((notification) =>
        this.notificationRepo.delete({ id: notification.id }),
      );
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
