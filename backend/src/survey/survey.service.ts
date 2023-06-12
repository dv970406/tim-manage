import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LessThan, Like } from 'typeorm';
import {
  CreateSurveyInput,
  CreateSurveyOutput,
} from './dtos/survey/create-survey.dto';
import {
  DeleteSurveyInput,
  DeleteSurveyOutput,
} from './dtos/survey/delete-survey.dto';
import { GetSurveyInput, GetSurveyOutput } from './dtos/survey/get-survey.dto';
import {
  GetSurveysInput,
  GetSurveysOutput,
} from './dtos/survey/get-surveys.dto';
import { Survey, SurveyForm } from './entities/survey.entity';
import { SurveyRepository } from './repositories/survey.repository';
import {
  MultipleChoiceFormat,
  ResponseRate,
  ShortAnswerFormat,
} from './dtos/survey/resolve-field.dto';
import { AnswerRepository } from './repositories/answer.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyRepository)
    private readonly surveyRepo: SurveyRepository,
    @InjectRepository(AnswerRepository)
    private readonly answerRepo: AnswerRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async responseRate({ id: surveyId }: Survey): Promise<ResponseRate> {
    const answeredEmployeeCount = await this.answerRepo.countBy({
      survey: { id: surveyId },
    });
    const notAnsweredEmployeeCount =
      (await this.userRepo.count()) - answeredEmployeeCount;

    return {
      answeredEmployeeCount,
      notAnsweredEmployeeCount,
    };
  }
  async multipleChoiceFormat({
    id: surveyId,
  }: Survey): Promise<MultipleChoiceFormat[]> {
    const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

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
        user: true,
      },
    });

    // 설문의 paragraph에서 지정한 객관식 지문들만 모은다.
    const choicesOfParagraphs = findSurvey?.paragraphs.map(
      (paragraph) => paragraph.multipleChoice,
    );

    // 그 설문에 대한 답변들 모은다.
    const resultsOfAnswers = answers?.map((answer) => ({
      results: answer.results,
      user: answer.user,
    }));

    // 객관식 지문에 대한 답변이 몇 개인지 센다.
    const chartFormatResults = choicesOfParagraphs?.map(
      (targetChoices, choiceIndex) => {
        const countResultMatchWithChoice = targetChoices.map((targetChoice) => {
          let count = 0;

          resultsOfAnswers?.map((answer) => {
            const answerValue = answer.results[choiceIndex];
            if (targetChoice === answerValue) count += 1;
          });
          return count;
        });

        return {
          labels: targetChoices,
          series: countResultMatchWithChoice,
        };
      },
    );

    // 차트 라이브러리 포맷에 맞게 변경한다.
    // eslint-disable-next-line prefer-const
    let multipleChoiceFormat = [];
    findSurvey.paragraphs.forEach((paragraph, index) => {
      if (paragraph.multipleChoice.length > 0) {
        // 객관식은 차트 포맷
        multipleChoiceFormat.push({
          paragraphTitle: paragraph.paragraphTitle,
          description: paragraph.description,
          chartFormatResults: chartFormatResults[index],
        });
      }
    });

    return multipleChoiceFormat;
  }
  async shortAnswerFormat({
    id: surveyId,
  }: Survey): Promise<ShortAnswerFormat[]> {
    const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

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
        user: true,
      },
    });

    // 설문에 대한 답변들 모은다.
    const resultsOfAnswers = answers?.map((answer) => ({
      results: answer.results,
      user: answer.user,
    }));

    // 차트 라이브러리 포맷에 맞게 변경한다.
    // eslint-disable-next-line prefer-const
    let shortAnswerFormat = [];
    findSurvey.paragraphs.forEach((paragraph, index) => {
      if (paragraph.multipleChoice.length === 0) {
        // 주관식은 차트 포맷 아님
        shortAnswerFormat.push({
          paragraphTitle: paragraph.paragraphTitle,
          description: paragraph.description,
          shortAnswers: resultsOfAnswers.map((answer) => ({
            result: answer.results[index],
            user: answer.user,
          })),
        });
      }
    });

    return shortAnswerFormat;
  }
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

  // 얘는 다시 얘 스스로가 edges를 return하는 것으로 되돌리자..
  async getSurveys(
    loggedInUser: User,
    { onlyMine = false, keyword, first, after }: GetSurveysInput,
  ): Promise<GetSurveysOutput> {
    try {
      const [findMyAnswers, totalCount] = await this.surveyRepo.findAndCount({
        order: { createdAt: 'DESC' },
        where: {
          ...(after && { createdAt: LessThan(after) }),
        },
        take: first,
        ...(keyword && {
          where: {
            surveyTitle: Like(`%${keyword}%`),
            ...(after && { createdAt: LessThan(after) }),
          },
        }),
        ...(onlyMine && {
          where: {
            user: {
              id: loggedInUser.id,
            },
          },
        }),
        relations: {
          user: true,
          answers: {
            user: true,
          },
        },
      });

      const edges = findMyAnswers.map((user) => ({
        cursor: user.createdAt,
        node: user,
      }));
      const endCursor = totalCount > 0 ? edges[edges.length - 1].cursor : null;

      return {
        ok: true,
        edges,
        pageInfo: {
          endCursor,
          hasNextPage: totalCount > first,
        },
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '설문 목록 조회에 실패했습니다.',
      };
    }
  }

  async getSurvey(
    loggedInUser: User,
    { id: surveyId }: GetSurveyInput,
  ): Promise<GetSurveyOutput> {
    try {
      const findSurvey = await this.surveyRepo.findSurvey({ surveyId });

      // findSurvey에서 로그인한 유저의 대답만을 남길 것이다.
      findSurvey.answers = findSurvey.answers.filter(
        (answer) => answer.user.id === loggedInUser.id,
      );

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

      const edge = {
        node: newSurvey,
        cursor: newSurvey.createdAt,
      };
      return {
        ok: true,
        edge,
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
