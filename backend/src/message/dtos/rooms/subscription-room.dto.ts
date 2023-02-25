import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class SubscriptionRoomInput {
  @Field((type) => ID)
  roomId: string;
}
