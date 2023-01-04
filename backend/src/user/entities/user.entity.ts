import { InternalServerErrorException } from '@nestjs/common';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';
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
}
