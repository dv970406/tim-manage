import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

// export enum EPosition {
//   'CEO' = 'CEO', // 대표
//   'DIR' = 'DIR', // 이사 Director
//   'TOP' = 'TOP', // 수석
//   'TMG' = 'TMG', // 팀장 Team Manager
//   'STF' = 'STF', // 사원 STAFF
//   'INT' = 'INT', // 인턴
// }
// registerEnumType(EPosition, { name: 'Position' });

@InputType('PositionInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Position extends CoreEntity {
  @Column({ unique: true })
  @Field((type) => String)
  @IsString()
  position: string;

  @OneToMany((type) => User, (user) => user.position)
  @Field((type) => [User])
  users: User[];
}
