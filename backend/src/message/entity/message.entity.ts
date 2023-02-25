import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Room } from './room.entity';

@InputType('MessageInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Message extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsString()
  message: string;

  // 주최자
  @ManyToOne((type) => User, (user) => user.messages, {
    onDelete: 'CASCADE',
  })
  @Field((type) => User)
  user: User;

  @RelationId((message: Message) => message.user)
  userId: string;

  @ManyToOne((type) => Room, (room) => room.messages, {
    onDelete: 'CASCADE',
  })
  @Field((type) => Room)
  room: Room;
  @RelationId((message: Message) => message.room)
  roomId: string;
}
