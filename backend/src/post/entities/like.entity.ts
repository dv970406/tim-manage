import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@InputType('LikeInputType', { isAbstract: true })
@Entity()
@ObjectType()
export class Like extends CoreEntity {
  @ManyToOne((type) => User, (user) => user.likes, { onDelete: 'CASCADE' })
  @Field((type) => User)
  user: User;

  @ManyToOne((type) => Post, (post) => post.likes, { onDelete: 'CASCADE' })
  @Field((type) => Post)
  post: Post;
}
