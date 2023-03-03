import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/core/dtos/node.dto';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@InputType('RoomInputType', { isAbstract: true })
@Entity()
@ObjectType({ implements: Node })
export class Room extends CoreEntity implements Node {
  @ManyToMany((type) => User, (user) => user.rooms)
  @JoinTable()
  @Field((type) => [User])
  users: User[];

  @OneToMany((type) => Message, (message) => message.room)
  @Field((type) => [Message])
  messages: Message[];

  // Define isTypeOf function to specify concrete type
  static isTypeOf(obj: any): obj is Room {
    return obj instanceof Room;
  }
}
