import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { pubsub, TRIGGER_RECEIVE_NOTIFICATION } from 'src/utils/subscription';
import {
  DeleteNotificationInput,
  DeleteReceiveNotificationOutput,
} from './dtos/delete-notification.dto';
import {
  GetNotificationInput,
  GetNotificationsOutput,
} from './dtos/get-notifications.dto';
import {
  ReadNotificationInput,
  ReadReceiveNotificationOutput,
} from './dtos/read-notification.dto';
import { ReceiveNotificationOutput } from './dtos/receive-notification.dto';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './notification.service';

@Resolver((of) => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Subscription((type) => ReceiveNotificationOutput, {
    filter: ({ receiveNotification }, _, { user: loggedInUser }) => {
      // 로그인한 유저가 휴가의 소유자일 때에만 알람을 받을 수 있게 허락
      return (
        receiveNotification.edge.node.confirmedVacation.user.id ===
        loggedInUser.id
      );
    },

    resolve: ({ receiveNotification }) => {
      return receiveNotification;
    },
  })
  @UseGuards(LoginGuard)
  receiveNotification() {
    return pubsub.asyncIterator(TRIGGER_RECEIVE_NOTIFICATION);
  }

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

  @Mutation((type) => ReadReceiveNotificationOutput)
  @UseGuards(LoginGuard)
  readNotification(
    @Args('input') readNoficationInput: ReadNotificationInput,
  ): Promise<ReadReceiveNotificationOutput> {
    return this.notificationService.readNotification(readNoficationInput);
  }

  @Mutation((type) => DeleteReceiveNotificationOutput)
  @UseGuards(LoginGuard)
  deleteNotification(
    @Args('input') deleteNoficationInput: DeleteNotificationInput,
  ): Promise<DeleteReceiveNotificationOutput> {
    return this.notificationService.deleteNotification(deleteNoficationInput);
  }
}
