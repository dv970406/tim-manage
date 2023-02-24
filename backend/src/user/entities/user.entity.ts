import { InternalServerErrorException } from '@nestjs/common';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Vacation } from 'src/vacation/entities/vacation.entity';
import { Position } from 'src/position/entities/position.entity';
import { Team } from 'src/team/entities/team.entity';
import { Post } from 'src/post/entities/post.entity';
import { Like } from 'src/post/entities/like.entity';
import { Comment } from 'src/post/entities/comment.entity';
import { Answer } from 'src/survey/entities/answer.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { Meeting } from 'src/meeting/entities/meeting.entity';
import { DB_TABLE } from 'src/core/variables/constants';
import { Node } from 'src/core/dtos/node.dto';
@InputType('UserInputType', { isAbstract: true })
@Entity()
@ObjectType({ implements: Node })
export class User extends CoreEntity implements Node {
  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  isManager: boolean;

  @Column({ unique: true })
  @Field((type) => String)
  @IsEmail({
    message: '이메일의 형식이 잘못되었습니다.',
  })
  email: string;

  // 비밀번호 칼럼은 못가져오게 설정
  @Column({ select: false })
  @Field((type) => String)
  @IsString()
  password: string;

  @Column()
  @Field((type) => String)
  @IsString()
  name: string;

  @Column()
  @Field((type) => Date)
  @IsDate()
  joinDate: Date;

  @Column('decimal', { default: 15 })
  // 넘겨받는 값은 string으로 하고 백에서 number로 변환시킬 것이다.
  // .5단위가 붙어야하다보니 이게 깔끔할듯
  @Field((type) => String)
  @IsNumber()
  availableVacation: number;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(receivedPassword: string): Promise<boolean> {
    try {
      const isSamePassword = await bcrypt.compare(
        receivedPassword,
        this.password,
      );
      return isSamePassword;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @OneToMany((type) => Vacation, (vacation) => vacation.user)
  @Field((type) => [Vacation])
  vacations: Vacation[];

  @ManyToMany((type) => Meeting, (meeting) => meeting.attendees)
  @Field((type) => [Meeting])
  attendedMeetings: Meeting[];

  @OneToMany((type) => Meeting, (meeting) => meeting.host)
  @Field((type) => [Meeting])
  hostedMeetingsByMe: Meeting[];

  @ManyToOne((type) => Position, (position) => position.users, {
    onDelete: 'SET NULL',
  })
  @Field((type) => Position)
  position: Position;

  @ManyToOne((type) => Team, (team) => team.users, { onDelete: 'SET NULL' })
  @Field((type) => Team)
  team: Team;

  @OneToMany((type) => Post, (post) => post.user)
  @Field((type) => [Post])
  posts: Post[];

  @OneToMany((type) => Like, (like) => like.user)
  @Field((type) => [Like])
  likes: Like[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  @Field((type) => [Comment])
  comments: Comment[];

  @OneToMany((type) => Survey, (survey) => survey.user)
  @Field((type) => [Survey])
  surveys: Survey[];

  @OneToMany((type) => Answer, (answer) => answer.user)
  @Field((type) => [Answer])
  answers: Answer[];

  // Define isTypeOf function to specify concrete type
  static isTypeOf(obj: any): obj is User {
    console.log('userobj :', obj);
    return obj instanceof User;
  }
}
