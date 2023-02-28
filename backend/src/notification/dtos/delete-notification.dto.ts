import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Notification } from '../entities/notification.entity';

@InputType()
export class DeleteNotificationInput {
  @Field((type) => ID, { nullable: true })
  notificationId?: string;
}

@ObjectType()
export class DeleteNotificationOutput extends CoreOutput {
  @Field((type) => ID, { nullable: true })
  deletedNotificationId?: string;
}
