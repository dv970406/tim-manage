import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';

// export enum ETeam {
//   'VIT' = 'VIT', // 비타민
//   'FRT' = 'FRT', // 프론티어
//   'WEB' = 'WEB', // 웹
//   'UNT' = 'UNT', // Unity
//   'SIM' = 'SIM', // 시뮬레이션
// }
// registerEnumType(ETeam, { name: 'Team' });

@InputType('TeamInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Team extends CoreEntity {
  @Column({ unique: true })
  @Field((type) => String)
  @IsString()
  team: string;

  @OneToMany((type) => User, (user) => user.team)
  @Field((type) => [User])
  users: User[];

  @OneToOne((type) => User)
  @JoinColumn()
  @Field((type) => User)
  leader: User;

  @RelationId((team: Team) => team.leader)
  // @Field((type) => Number)
  leaderId: number;
}
