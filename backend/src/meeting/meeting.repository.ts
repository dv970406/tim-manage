import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Meeting } from './entities/meeting.entity';

@CustomRepository(Meeting)
export class MeetingRepository extends Repository<Meeting> {
  async findMeeting({ meetingId }) {
    const meeting = await this.findOne({
      where: { id: meetingId },
      relations: {
        host: true,
        attendees: true,
      },
    });
    if (!meeting) {
      throw new Error('존재하지 않는 회의입니다.');
    }

    return meeting;
  }
}
