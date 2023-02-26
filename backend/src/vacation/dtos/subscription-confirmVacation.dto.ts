import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Vacation } from '../entities/vacation.entity';

@ArgsType()
export class SubscriptionConfirmVacationInput {
  @Field((type) => ID)
  userId: string;
}
