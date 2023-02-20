import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Like } from 'src/post/entities/like.entity';

@ObjectType()
export class LikesConnection {
  @Field((type) => [LikeEdge])
  edges?: LikeEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class LikeEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Like)
  node: Like;
}
