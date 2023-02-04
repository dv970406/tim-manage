import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import {
  CreateSurveyInput,
  CreateSurveyOutput,
} from './dtos/survey/create-survey.dto';
import {
  DeleteSurveyInput,
  DeleteSurveyOutput,
} from './dtos/survey/delete-survey.dto';
import { GetSurveyInput, GetSurveyOutput } from './dtos/survey/get-survey.dto';
import { GetSurveysOutput } from './dtos/survey/get-surveys.dto';
import { Survey, SurveyForm } from './entities/survey.entity';
import { SurveyRepository } from './repositories/survey.repository';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyRepository)
    private readonly surveyRepo: SurveyRepository,
  ) {}

  async isMySurvey(loggedInUser: User, survey: Survey): Promise<boolean> {
    return loggedInUser.id === survey.user.id;
  }
  async isAnswered(loggedInUser: User, survey: Survey): Promise<boolean> {
    return this.surveyRepo.exist({
      where: {
        id: survey.id,
        answers: {
          user: {
            id: loggedInUser.id,
          },
        },
      },
    });
  }

  async getSurveys(): Promise<GetSurveysOutput> {
    try {
      const findSurveys = await this.surveyRepo.find({
        order: { createdAt: 'DESC' },
        relations: {
          user: true,
        },
      });
      return {
        ok: true,
        surveys: findSurveys,
      };
    } catch (error) {
      return {
        ok: false,
        error: '설문 리스트 조회에 실패했습니다.',
      };
    }
  }

  async getSurvey({ id: surveyId }: GetSurveyInput): Promise<GetSurveyOutput> {
    try {
      const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

      return {
        ok: true,
        survey: findSurvey,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '설문 조회에 실패했습니다.',
      };
    }
  }
  async createSurvey(
    loggedInUser: User,
    { isAnonymous = false, paragraphs, surveyTitle }: CreateSurveyInput,
  ): Promise<CreateSurveyOutput> {
    try {
      if (!surveyTitle) {
        throw new Error('설문의 제목을 입력해주세요.');
      }
      // paragraphs가 어떤 방식으로 들어오는지 체크해야됨
      if (paragraphs.length <= 0) {
        throw new Error('질문을 1개 이상 추가해주세요.');
      }

      const paragraphsToArray: SurveyForm[] = [
        ...JSON.parse(JSON.stringify(paragraphs)),
      ];

      const checkTitle = paragraphsToArray.findIndex(
        (paragraph: SurveyForm) => !paragraph.paragraphTitle,
      );
      if (checkTitle >= 0) {
        throw new Error('단락의 제목을 입력해주세요');
      }

      const isMultipleChoice = paragraphsToArray.findIndex(
        (paragraph: SurveyForm) => paragraph.multipleChoice.length === 1,
      );
      if (isMultipleChoice >= 0) {
        throw new Error('1개의 선택지는 불가합니다.');
      }

      const newSurvey = await this.surveyRepo.save({
        surveyTitle,
        isAnonymous,
        paragraphs,
        user: loggedInUser,
      });

      return {
        ok: true,
        survey: newSurvey,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '설문 생성에 실패했습니다.',
      };
    }
  }

  async deleteSurvey(
    loggedInUser: User,
    { id: surveyId }: DeleteSurveyInput,
  ): Promise<DeleteSurveyOutput> {
    try {
      const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

      if (loggedInUser.id !== findSurvey.user.id) {
        throw new Error('설문의 소유자가 아닙니다.');
      }

      await this.surveyRepo.delete({ id: surveyId });
      return {
        ok: true,
        deletedSurveyId: surveyId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '설문 삭제에 실패했습니다.',
      };
    }
  }
}
