import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Notification } from '../entities/notification.entity';

@ObjectType()
export class NotificationsConnection {
  @Field((type) => [NotificationEdge])
  edges?: NotificationEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
@ObjectType()
export class NotificationEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Notification)
  node: Notification;
}
