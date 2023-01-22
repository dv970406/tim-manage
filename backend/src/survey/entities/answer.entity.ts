import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Survey, SurveyForm } from './survey.entity';

@InputType('AnswerInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Answer extends CoreEntity {
  @ManyToOne((type) => Survey, (survey) => survey.answers, {
    onDelete: 'CASCADE',
  })
  @Field((type) => Survey)
  survey: Survey;

  @ManyToOne((type) => User, (user) => user.answers, {
    onDelete: 'CASCADE',
  })
  @Field((type) => User)
  user: User;

  @RelationId((answer: Answer) => answer.user)
  userId: string;

  @Column({ type: 'json' })
  @Field((type) => [String])
  results: string[];
}
