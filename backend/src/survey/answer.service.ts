import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import {
  CreateAnswerInput,
  CreateAnswerOutput,
} from './dtos/answer/create-answer.dto';
import {
  DeleteAnswerInput,
  DeleteAnswerOutput,
} from './dtos/answer/delete-answer.dto';
import {
  GetAnswersOfsurveyInput,
  GetAnswersOfsurveyOutput,
} from './dtos/answer/get-answersOfSurvey.dto';
import { GetMyAnswersOutput } from './dtos/answer/get-myAnswers.dto';
import { AnswerRepository } from './repositories/answer.repository';
import { SurveyRepository } from './repositories/survey.repository';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(SurveyRepository)
    private readonly surveyRepo: SurveyRepository,
    @InjectRepository(AnswerRepository)
    private readonly answerRepo: AnswerRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}
  async getMyAnswers(loggedInUser: User): Promise<GetMyAnswersOutput> {
    try {
      const findMyAnswers = await this.answerRepo.find({
        where: {
          user: {
            id: loggedInUser.id,
          },
        },
        order: {
          createdAt: 'DESC',
        },
        relations: {
          survey: true,
        },
      });

      return {
        ok: true,
        answers: findMyAnswers,
      };
    } catch (error) {
      return {
        ok: false,
        error: '답변 리스트 조회에 실패했습니다.',
      };
    }
  }

  async getAnswersOfSurvey(
    loggedInUser: User,
    { surveyId }: GetAnswersOfsurveyInput,
  ): Promise<GetAnswersOfsurveyOutput> {
    try {
      const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

      if (loggedInUser.id !== findSurvey.user.id) {
        throw new Error('설문의 소유자가 아닙니다.');
      }

      const answers = await this.answerRepo.find({
        where: {
          survey: {
            id: surveyId,
          },
        },
        order: {
          createdAt: 'DESC',
        },
        relations: {
          // 익명 설문인 경우 user정보 반환 못하게 하기
          user: !findSurvey.isAnonymous,
        },
      });

      // 설문의 paragraph에서 지정한 객관식 지문들만 모은다.
      const choicesOfParagraphs = findSurvey?.paragraphs.map(
        (paragraph) => paragraph.multipleChoice,
      );

      // 그 설문에 대한 답변들 모은다.
      const resultsOfAnswers = answers?.map((answer) => answer.results);

      // 객관식 지문에 대한 답변이 몇 개인지 센다.
      const chartFormatResults = choicesOfParagraphs?.map(
        (targetChoices, choiceIndex) => {
          const countResultMatchWithChoice = targetChoices.map(
            (targetChoice, targetIndex) => {
              let count = 0;

              resultsOfAnswers?.map((results) => {
                const answerValue = results[choiceIndex];
                if (targetChoice === answerValue) count += 1;
              });
              return count;
            },
          );

          return {
            labels: targetChoices,
            series: countResultMatchWithChoice,
          };
        },
      );

      // 차트 라이브러리 포맷에 맞게 변경한다.
      let shortAnswerFormat = [];
      let multipleChoiceFormat = [];
      findSurvey.paragraphs.forEach((paragraph, index) => {
        if (paragraph.multipleChoice.length > 0) {
          // 객관식은 차트 포맷
          multipleChoiceFormat.push({
            paragraphTitle: paragraph.paragraphTitle,
            description: paragraph.description,
            chartFormatResults: chartFormatResults[index],
          });
        } else {
          // 주관식은 차트 포맷 아님
          shortAnswerFormat.push({
            paragraphTitle: paragraph.paragraphTitle,
            description: paragraph.description,
            shortAnswers: resultsOfAnswers.map(
              (shortAnswer) => shortAnswer[index],
            ),
          });
        }
      });

      const answeredEmployeeCount = await this.answerRepo.countBy({
        survey: { id: surveyId },
      });
      const notAnsweredEmployeeCount =
        (await this.userRepo.count()) - answeredEmployeeCount;

      return {
        ok: true,
        shortAnswerFormat,
        multipleChoiceFormat,
        responseRate: {
          notAnsweredEmployeeCount,
          answeredEmployeeCount,
        },
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '설문에 대한 답변 조회에 실패했습니다.',
      };
    }
  }

  async createAnswer(
    loggedInUser: User,
    { surveyId, results }: CreateAnswerInput,
  ): Promise<CreateAnswerOutput> {
    try {
      const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

      if (results.length < findSurvey.paragraphs.length) {
        throw new Error('답변을 작성하지 않은 단락이 있습니다.');
      } else if (results.length > findSurvey.paragraphs.length) {
        throw new Error('작성한 답변이 단락의 개수보다 많습니다.');
      }

      const alreadyAnswered = await findSurvey.answers.find(
        (answer) => answer.user.id === loggedInUser.id,
      );
      if (alreadyAnswered) {
        throw new Error('이미 답변한 설문입니다.');
      }

      await this.answerRepo.save({
        results,
        user: loggedInUser,
        survey: findSurvey,
      });

      return {
        ok: true,
        surveyId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '답변 생성에 실패했습니다.',
      };
    }
  }

  async deleteAnswer(
    loggedInUser: User,
    { id: answerId }: DeleteAnswerInput,
  ): Promise<DeleteAnswerOutput> {
    try {
      const findAnswer = await this.answerRepo.findOneBy({
        id: answerId,
      });

      if (!findAnswer) {
        throw new Error('존재하지 않는 답변입니다.');
      }

      if (loggedInUser.id !== findAnswer.userId) {
        throw new Error('답변의 소유자가 아닙니다.');
      }

      await this.answerRepo.delete({ id: answerId });

      return {
        ok: true,
        deletedAnswerId: answerId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '답변 삭제에 실패했습니다.',
      };
    }
  }
}
