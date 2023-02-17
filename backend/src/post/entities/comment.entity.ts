import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CoreEntity } from 'src/core/entities/core.entity';
import { DB_TABLE } from 'src/core/variables/constants';
import { User } from 'src/user/entities/user.entity';
import { BeforeInsert, Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Post } from './post.entity';

@InputType('CommentInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Comment extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsString()
  content: string;

  @ManyToOne((type) => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @Field((type) => User)
  user: User;

  @RelationId((comment: Comment) => comment.user)
  userId: string;

  @ManyToOne((type) => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  @Field((type) => Post)
  post: Post;

  @RelationId((comment: Comment) => comment.post)
  postId: string;
}
