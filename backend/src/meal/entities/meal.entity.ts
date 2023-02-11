import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { Column, Entity } from 'typeorm';

// 점심이 없는 요일도 있을 수 있음
@InputType('MealInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Meal extends CoreEntity {
  @Column('varchar', { array: true })
  @Field((type) => [String])
  mon: string[];

  @Column('varchar', { array: true })
  @Field((type) => [String])
  tue: string[];

  @Column('varchar', { array: true })
  @Field((type) => [String])
  wed: string[];

  @Column('varchar', { array: true })
  @Field((type) => [String])
  thu: string[];

  @Column('varchar', { array: true })
  @Field((type) => [String])
  fri: string[];
}
