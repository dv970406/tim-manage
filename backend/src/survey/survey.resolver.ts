import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard, ManagerGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import {
  MultipleChoiceFormat,
  ResponseRate,
  ShortAnswerFormat,
} from './dtos/survey/resolve-field.dto';
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
import { Survey } from './entities/survey.entity';
import { SurveyService } from './survey.service';

@Resolver(() => Survey)
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}
  @ResolveField(() => ResponseRate)
  responseRate(@Parent() survey: Survey): Promise<ResponseRate> {
    return this.surveyService.responseRate(survey);
  }

  @ResolveField(() => [MultipleChoiceFormat])
  multipleChoiceFormat(
    @Parent() survey: Survey,
  ): Promise<MultipleChoiceFormat[]> {
    return this.surveyService.multipleChoiceFormat(survey);
  }

  @ResolveField(() => [ShortAnswerFormat])
  shortAnswerFormat(@Parent() survey: Survey): Promise<ShortAnswerFormat[]> {
    return this.surveyService.shortAnswerFormat(survey);
  }
  @ResolveField(() => Boolean)
  isMySurvey(
    @LoggedInUser() loggedInUser: User,
    @Parent() survey: Survey,
  ): Promise<boolean> {
    return this.surveyService.isMySurvey(loggedInUser, survey);
  }
  @ResolveField(() => Boolean)
  isAnswered(
    @Parent() survey: Survey,
    @LoggedInUser() loggedInUser: User,
  ): Promise<boolean> {
    return this.surveyService.isAnswered(loggedInUser, survey);
  }

  // Survey는 복수형이 없는데 그냥 's'를 붙여 의미상 복수형으로 생각하자
  @Query(() => GetSurveysOutput)
  @UseGuards(LoginGuard)
  getSurveys(
    @LoggedInUser() loggedInUser: User,
    @Args() getSurveysInput: GetSurveysInput,
  ): Promise<GetSurveysOutput> {
    return this.surveyService.getSurveys(loggedInUser, getSurveysInput);
  }

  @Query(() => GetSurveyOutput)
  @UseGuards(LoginGuard)
  getSurvey(
    @LoggedInUser() loggedInUser: User,
    @Args('input') getSurveyInput: GetSurveyInput,
  ): Promise<GetSurveyOutput> {
    return this.surveyService.getSurvey(loggedInUser, getSurveyInput);
  }

  @Mutation(() => CreateSurveyOutput)
  @UseGuards(ManagerGuard)
  createSurvey(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createSurveyInput: CreateSurveyInput,
  ): Promise<CreateSurveyOutput> {
    return this.surveyService.createSurvey(loggedInUser, createSurveyInput);
  }

  @Mutation(() => DeleteSurveyOutput)
  @UseGuards(ManagerGuard)
  deleteSurvey(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deleteSurveyInput: DeleteSurveyInput,
  ): Promise<DeleteSurveyOutput> {
    return this.surveyService.deleteSurvey(loggedInUser, deleteSurveyInput);
  }
}
