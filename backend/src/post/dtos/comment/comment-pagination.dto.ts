import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Comment } from 'src/post/entities/comment.entity';

@ObjectType()
export class CommentsConnection {
  @Field((type) => [CommentEdge])
  edges?: CommentEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class CommentEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Comment)
  node: Comment;
}
