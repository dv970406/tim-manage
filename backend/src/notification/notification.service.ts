import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LessThan } from 'typeorm';
import {
  DeleteNotificationInput,
  DeleteNotificationOutput,
} from './dtos/delete-notification.dto';
import {
  GetNotificationInput,
  GetNotificationsOutput,
} from './dtos/get-notifications.dto';
import {
  ReadNotificationInput,
  ReadNotificationOutput,
} from './dtos/read-notification.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationRepository)
    private readonly notificationRepo: NotificationRepository,
  ) {}
  async getNotifications(
    loggedInUser: User,
    { first, after }: GetNotificationInput,
  ): Promise<GetNotificationsOutput> {
    const [findNotifications, totalCount] =
      await this.notificationRepo.findAndCount({
        where: {
          user: {
            id: loggedInUser.id,
          },
          ...(after && { createdAt: LessThan(after) }),
        },
        order: {
          createdAt: 'DESC',
        },
        take: first,
        relations: {
          confirmedByWho: true,
          confirmedVacation: true,
        },
      });

    const edges = findNotifications.map((notification) => ({
      cursor: notification.createdAt,
      node: notification,
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
  }

  async readNotification({
    notificationId,
  }: ReadNotificationInput): Promise<ReadNotificationOutput> {
    try {
      const findNotification = await this.notificationRepo.findOneBy({
        id: notificationId,
      });
      if (!findNotification) {
        throw new Error('존재하지 않는 알람입니다.');
      }

      findNotification.isRead = true;
      await this.notificationRepo.save(findNotification);

      return {
        ok: true,
        notification: findNotification,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '알람 조회에 실패했습니다.',
      };
    }
  }
  async deleteNotification({
    notificationId,
  }: DeleteNotificationInput): Promise<DeleteNotificationOutput> {
    try {
      const findNotification = await this.notificationRepo.findOneBy({
        id: notificationId,
      });
      if (!findNotification) {
        throw new Error('존재하지 않는 알람입니다.');
      }

      return {
        ok: true,
        deletedNotificationId: findNotification.id,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '알람 조회에 실패했습니다.',
      };
    }
  }
}
