import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@InputType('RoomInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Room extends CoreEntity {
  @ManyToMany((type) => User, (user) => user.rooms)
  @JoinTable()
  @Field((type) => [User])
  users: User[];

  @OneToMany((type) => Message, (message) => message.room)
  @Field((type) => [Message])
  messages: Message[];
}
