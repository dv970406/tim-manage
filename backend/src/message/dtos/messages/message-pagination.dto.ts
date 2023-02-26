import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Message } from 'src/message/entity/message.entity';

@ObjectType()
export class MessagesConnection {
  @Field((type) => [MessageEdge])
  edges?: MessageEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class MessageEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Message)
  node: Message;
}
