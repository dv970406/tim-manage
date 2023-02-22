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
import { LoginGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import {
  CreateMeetingInput,
  CreateMeetingOutput,
} from './dtos/create-meeting.dto';
import {
  DeleteMeetingInput,
  DeleteMeetingOutput,
} from './dtos/delete-meeting.dto';
import { GetMeetingInput, GetMeetingOutput } from './dtos/get-meeting.dto';
import { GetMeetingsOutput } from './dtos/get-meetings.dto';
import {
  UpdateMeetingInput,
  UpdateMeetingOutput,
} from './dtos/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';
import { MeetingService } from './meeting.service';

@Resolver((of) => Meeting)
export class MeetingResolver {
  constructor(private readonly meetingService: MeetingService) {}

  @Query((type) => GetMeetingsOutput)
  getMeetings(): Promise<GetMeetingsOutput> {
    return this.meetingService.getMeetings();
  }

  @Query((type) => GetMeetingOutput)
  getMeeting(
    @Args('input') getMeetingInput: GetMeetingInput,
  ): Promise<GetMeetingOutput> {
    return this.meetingService.getMeeting(getMeetingInput);
  }

  @Mutation((type) => CreateMeetingOutput)
  @UseGuards(LoginGuard)
  createMeeting(
    @LoggedInUser() loggedInUser: User,
    @Args('input') createMeetingInput: CreateMeetingInput,
  ): Promise<CreateMeetingOutput> {
    return this.meetingService.createMeeting(loggedInUser, createMeetingInput);
  }

  @Mutation((type) => UpdateMeetingOutput)
  @UseGuards(LoginGuard)
  updateMeeting(
    @LoggedInUser() loggedInUser: User,
    @Args('input') updateMeetingInput: UpdateMeetingInput,
  ): Promise<UpdateMeetingOutput> {
    return this.meetingService.updateMeeting(loggedInUser, updateMeetingInput);
  }

  @Mutation((type) => DeleteMeetingOutput)
  @UseGuards(LoginGuard)
  deleteMeeting(
    @LoggedInUser() loggedInUser: User,
    @Args('input') deleteMeetingInput: DeleteMeetingInput,
  ): Promise<DeleteMeetingOutput> {
    return this.meetingService.deleteMeeting(loggedInUser, deleteMeetingInput);
  }
}
