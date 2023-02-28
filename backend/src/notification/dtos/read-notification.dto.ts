import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Notification } from '../entities/notification.entity';

@InputType()
export class ReadNotificationInput {
  @Field((type) => ID, { nullable: true })
  notificationId?: string;
}

@ObjectType()
export class ReadNotificationOutput extends CoreOutput {
  @Field((type) => Notification, { nullable: true })
  notification?: Notification;
}
