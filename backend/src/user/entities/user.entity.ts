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
@InputType('UserInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  isManager: boolean;

  @Column({ unique: true })
  @Field((type) => String)
  @IsEmail()
  email: string;

  @Column()
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
  @Field((type) => Number, { defaultValue: 15 })
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

  @ManyToOne((type) => Position, (position) => position.users)
  @Field((type) => Position)
  position: Position;

  @ManyToOne((type) => Team, (team) => team.users)
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
}
