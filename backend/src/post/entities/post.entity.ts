import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Node } from 'src/core/dtos/node.dto';
import { CoreEntity } from 'src/core/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { Comment } from './comment.entity';
import { Like } from './like.entity';

@InputType('PostInputType', { isAbstract: true })
@Entity()
@ObjectType({ implements: Node })
export class Post extends CoreEntity implements Node {
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

  // Define isTypeOf function to specify concrete type
  // static isTypeOf(obj: any): obj is Post {
  //   return obj instanceof Post;
  // }
}
