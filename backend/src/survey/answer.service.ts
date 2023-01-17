import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
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
  ) {}
  async getMyAnswers(loggedInUser: User): Promise<GetMyAnswersOutput> {
    try {
      const findMyAnswers = await this.answerRepo.find({
        where: {
          user: {
            _id: loggedInUser._id,
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

      if (loggedInUser._id !== findSurvey.user._id) {
        throw new Error('설문의 소유자가 아닙니다.');
      }

      const answers = await this.answerRepo.find({
        where: {
          survey: {
            _id: surveyId,
          },
        },
        order: {
          createdAt: 'DESC',
        },
        relations: {
          survey: true,
          // 익명 설문인 경우 user정보 반환 못하게 하기
          user: !findSurvey.isAnonymous,
        },
      });

      return {
        ok: true,
        answers,
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

      await this.answerRepo.save({
        results,
        user: loggedInUser,
        survey: findSurvey,
      });

      return {
        ok: true,
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
    { _id: answerId }: DeleteAnswerInput,
  ): Promise<DeleteAnswerOutput> {
    try {
      const findAnswer = await this.answerRepo.findOneBy({
        _id: answerId,
      });

      if (!findAnswer) {
        throw new Error('존재하지 않는 답변입니다.');
      }

      if (loggedInUser._id !== findAnswer.userId) {
        throw new Error('답변의 소유자가 아닙니다.');
      }

      await this.answerRepo.delete({ _id: answerId });

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '답변 삭제에 실패했습니다.',
      };
    }
  }
}
