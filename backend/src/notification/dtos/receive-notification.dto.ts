import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { NotificationEdge } from 'src/notification/dtos/nofication-pagination.dto';

@ObjectType()
export class ReceiveNotificationOutput extends CoreOutput {
  @Field((type) => NotificationEdge)
  edge?: NotificationEdge;
}
