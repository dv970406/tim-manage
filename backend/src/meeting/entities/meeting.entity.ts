import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  RelationId,
} from 'typeorm';

@InputType('MeetingInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Meeting extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsString()
  title: string;

  @Column()
  @Field((type) => Date)
  @IsDate({ message: '날짜 형식이 아닙니다.' })
  startTime: Date;

  @Column()
  @Field((type) => Date)
  @IsDate({ message: '날짜 형식이 아닙니다.' })
  endTime: Date;

  // 참석자
  @ManyToMany((type) => User, (user) => user.attendedMeetings)
  @JoinTable()
  @Field((type) => [User])
  attendees: User[];

  // 주최자
  @ManyToOne((type) => User, (user) => user.hostedMeetingsByMe, {
    onDelete: 'CASCADE',
  })
  @Field((type) => User)
  host: User;

  @RelationId((meeting: Meeting) => meeting.host)
  hostId: string;
}
