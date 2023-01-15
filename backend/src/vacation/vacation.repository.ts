import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Vacation } from './entities/vacation.entity';

@CustomRepository(Vacation)
export class VacationRepository extends Repository<Vacation> {
  async findVacation({ vacationId }) {
    const vacation = await this.findOne({
      where: { _id: vacationId },
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
}
