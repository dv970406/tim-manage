import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNumber } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Double, Entity, ManyToOne, RelationId } from 'typeorm';

// DB 저장용도 아님
@InputType('ConfirmInputType', { isAbstract: true })
@ObjectType()
export class Confirm {
  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  byCeo: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  byLeader: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  byManager: boolean;
}

@InputType('VacationInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Vacation extends CoreEntity {
  @Column()
  @Field((type) => Date)
  @IsDate({ message: '날짜 형식이 아닙니다.' })
  startDate: Date;

  @Column()
  @Field((type) => Date)
  @IsDate({ message: '날짜 형식이 아닙니다.' })
  endDate: Date;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  @IsBoolean()
  isHalf: boolean;

  @Column('float')
  @Field((type) => Number)
  @IsNumber()
  duration: number;

  @Column({ type: 'json' })
  @Field((type) => Confirm)
  confirmed: Confirm;

  @ManyToOne((type) => User, (user) => user.vacations, { onDelete: 'CASCADE' })
  @Field((type) => User)
  user: User;

  @RelationId((vacation: Vacation) => vacation.user)
  userId: string;
}
