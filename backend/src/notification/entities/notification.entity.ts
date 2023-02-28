import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Vacation } from 'src/vacation/entities/vacation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  RelationId,
} from 'typeorm';

@InputType('NotificationInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Notification extends CoreEntity {
  @ManyToOne((type) => Vacation)
  @Field((type) => Vacation)
  confirmedVacation: Vacation;

  @ManyToOne((type) => User)
  @Field((type) => User)
  confirmedByWho: User;

  @ManyToOne((type) => User, (user) => user.vacations, { onDelete: 'CASCADE' })
  @Field((type) => User)
  user: User;

  @RelationId((notification: Notification) => notification.user)
  userId: string;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  isRead?: boolean;
}
