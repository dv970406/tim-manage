import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/core/dtos/node.dto';
import { CoreEntity } from 'src/core/entities/core.entity';
import { DB_TABLE } from 'src/core/variables/constants';
import { User } from 'src/user/entities/user.entity';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Answer } from './answer.entity';

@InputType('SurveyInputType', { isAbstract: true })
@Entity()
@ObjectType({ implements: Node })
export class Survey extends CoreEntity implements Node {
  @Column()
  @Field((type) => String)
  surveyTitle: string;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  isAnonymous: boolean;

  @Column({ type: 'json' })
  @Field((type) => [SurveyForm])
  paragraphs: SurveyForm[];

  @OneToMany((type) => Answer, (answer) => answer.survey)
  @Field((type) => [Answer])
  answers: Answer[];

  @ManyToOne((type) => User, (user) => user.surveys)
  @Field((type) => User)
  user: User;

  // Define isTypeOf function to specify concrete type
  // static isTypeOf(obj: any): obj is Survey {
  //   return obj instanceof Survey;
  // }
}

// DB 저장용도 아님
@InputType('SurveyFormInputType', { isAbstract: true })
@ObjectType()
export class SurveyForm {
  @Field((type) => String)
  paragraphTitle: string;

  @Field((type) => String, { nullable: true })
  description?: string;

  // 객관식 / 값이 없으면 주관식으로
  @Field((type) => [String])
  multipleChoice: string[];
}
