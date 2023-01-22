import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Survey } from '../entities/survey.entity';

@CustomRepository(Survey)
export class SurveyRepository extends Repository<Survey> {
  async findSurvey({ surveyId }) {
    const findSurvey = await this.findOne({
      where: { id: surveyId },
      relations: {
        user: {
          position: true,
        },
      },
    });
    if (!findSurvey) {
      throw new Error('존재하지 않는 설문입니다.');
    }
    return findSurvey;
  }
}
