import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { DB_TABLE } from 'src/core/variables/constants';
import { In } from 'typeorm';
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
import { MeetingRepository } from './meeting.repository';

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(MeetingRepository)
    private readonly meetingRepo: MeetingRepository,
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async getMeetings(): Promise<GetMeetingsOutput> {
    try {
      const meetings = await this.meetingRepo.find({
        order: { createdAt: 'DESC' },
        relations: {
          host: true,
          attendees: true,
        },
      });

      return {
        ok: true,
        meetings,
      };
    } catch (error) {
      return {
        ok: false,
        error: '회의 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getMeeting({
    id: meetingId,
  }: GetMeetingInput): Promise<GetMeetingOutput> {
    try {
      const meeting = await this.meetingRepo.findMeeting({ meetingId });

      return {
        ok: true,
        meeting,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '회의 조회에 실패했습니다.',
      };
    }
  }

  async createMeeting(
    loggedInUser: User,
    { title, startTime, endTime, attendeesIds }: CreateMeetingInput,
  ): Promise<CreateMeetingOutput> {
    try {
      if (!title) {
        throw new Error('제목을 입력해주세요.');
      }
      if (!startTime || !endTime) {
        throw new Error('일정을 입력해주세요.');
      }
      if (startTime > endTime) {
        throw new Error('시간대의 형식을 확인해주세요.');
      }

      const attendees = await this.userRepo.find({
        where: { id: In(attendeesIds) },
        select: {
          id: true,
          name: true,
        },
      });

      const createMeeting = this.meetingRepo.create({
        title,
        startTime,
        endTime,
        host: loggedInUser,
        attendees,
      });

      const newMeeting = await this.meetingRepo.save(createMeeting);

      return {
        ok: true,
        meeting: newMeeting,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '회의 생성에 실패했습니다.',
      };
    }
  }

  async updateMeeting(
    loggedInUser: User,
    { meetingId, title, attendeesIds, endTime, startTime }: UpdateMeetingInput,
  ): Promise<UpdateMeetingOutput> {
    try {
      const findMeeting = await this.meetingRepo.findMeeting({
        meetingId,
      });

      if (loggedInUser.id !== findMeeting.hostId) {
        throw new Error('회의의 소유자가 아닙니다.');
      }

      if (title) {
        findMeeting.title = title;
      }
      if (endTime) {
        findMeeting.endTime = endTime;
      }
      if (startTime) {
        findMeeting.startTime = startTime;
      }

      if (attendeesIds?.length > 0) {
        const attendees = await this.userRepo.findBy({
          id: In(attendeesIds),
        });
        findMeeting.attendees = attendees;
      }

      const updatedMeeting = await this.meetingRepo.save(findMeeting);

      return {
        ok: true,
        meeting: updatedMeeting,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '회의 수정에 실패했습니다.',
      };
    }
  }

  async deleteMeeting(
    loggedInUser: User,
    { id: meetingId }: DeleteMeetingInput,
  ): Promise<DeleteMeetingOutput> {
    try {
      const findMeeting = await this.meetingRepo.findMeeting({
        meetingId,
      });

      if (loggedInUser.id !== findMeeting.hostId) {
        throw new Error('회의의 소유자가 아닙니다.');
      }

      await this.meetingRepo.delete({ id: meetingId });

      return {
        ok: true,
        deletedMeetingId: meetingId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '회의 삭제에 실패했습니다.',
      };
    }
  }
}
