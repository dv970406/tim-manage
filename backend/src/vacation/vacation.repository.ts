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
    const start = new Date(startDate);
    const end = new Date(endDate);

    // 주말 제외 일수 계산 로직
    let durationExceptedWeekend = 0;
    while (true) {
      let tempDate = start;
      // 이 로직에는 총일수+1일이 되는 문제가 있음.
      // fullCalendar에서 26일을 endday로 정했어도 라이브러리 내부적으로 2023-01-27T00:00:00.000Z로 보냄.
      // 즉 27일까지 아래 로직에 포함되어버림.
      // end.getTime() 부분에 -1000ms 하면서 26일까지로 센다.
      if (tempDate.getTime() > end.getTime() - 1000) {
        break;
      } else {
        let tmp = tempDate.getDay();
        if (tmp === 0 || tmp === 6) {
          // 주말
        } else {
          ++durationExceptedWeekend;
        }
        tempDate.setDate(start.getDate() + 1);
      }
    }

    const duration = isHalf ? 0.5 : durationExceptedWeekend;

    return duration;
  }
}
