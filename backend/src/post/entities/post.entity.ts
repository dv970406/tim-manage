import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { DB_TABLE } from 'src/core/variables/constants';
import { User } from 'src/user/entities/user.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  RelationId,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Like } from './like.entity';

@InputType('PostInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Post extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsString()
  title: string;

  @Column()
  @Field((type) => String)
  @IsString()
  content: string;

  @ManyToOne((type) => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @Field((type) => User)
  user: User;

  @RelationId((post: Post) => post.user)
  userId: string;

  @OneToMany((type) => Like, (like) => like.post)
  @Field((type) => [Like])
  likes: Like[];

  @OneToMany((type) => Comment, (comment) => comment.post)
  @Field((type) => [Comment])
  comments: Comment[];
}
