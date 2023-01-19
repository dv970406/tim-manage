import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Vacation } from './entities/vacation.entity';

@CustomRepository(Vacation)
export class VacationRepository extends Repository<Vacation> {
  async findVacation({ vacationId }) {
    const vacation = await this.findOne({
      where: { id: vacationId },
      relations: {
        user: {
          team: true,
        },
      },
    });
    if (!vacation) {
      throw new Error('존재하지 않는 휴가입니다.');
    }

    return vacation;
  }

  async getDuration({ startDate, endDate, isHalf }) {
    const start = +new Date(startDate).getDate();
    const finish = +new Date(endDate).getDate();

    if (isHalf && start !== finish) {
      throw new Error('반차는 1일 범위 내 지정 후 체크해주세요.');
    }

    const duration = isHalf ? 0.5 : finish - start + 1;

    return duration;
  }
}
