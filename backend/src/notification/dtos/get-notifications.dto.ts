import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { ConnectionInput, PageInfo } from 'src/core/dtos/pagination.dto';
import { Notification } from '../entities/notification.entity';
import { NotificationEdge } from './nofication-pagination.dto';

@ArgsType()
export class GetNotificationInput extends ConnectionInput {}
@ObjectType()
export class GetNotificationsOutput extends CoreOutput {
  @Field((type) => [NotificationEdge])
  edges?: NotificationEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}
