import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
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
import { Notification } from './entities/notification.entity';
import { NotificationService } from './notification.service';

@Resolver((of) => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query((type) => GetNotificationsOutput)
  @UseGuards(LoginGuard)
  getNotifications(
    @LoggedInUser() loggedInUser: User,
    @Args() getNotificationInput: GetNotificationInput,
  ): Promise<GetNotificationsOutput> {
    return this.notificationService.getNotifications(
      loggedInUser,
      getNotificationInput,
    );
  }

  @Mutation((type) => ReadNotificationOutput)
  @UseGuards(LoginGuard)
  readNotification(
    @Args('input') readNoficationInput: ReadNotificationInput,
  ): Promise<ReadNotificationOutput> {
    return this.notificationService.readNotification(readNoficationInput);
  }

  @Mutation((type) => DeleteNotificationOutput)
  @UseGuards(LoginGuard)
  deleteNotification(
    @Args('input') deleteNoficationInput: DeleteNotificationInput,
  ): Promise<DeleteNotificationOutput> {
    return this.notificationService.deleteNotification(deleteNoficationInput);
  }
}
