import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Message } from 'src/message/entity/message.entity';

@InputType()
export class SendMessageInput extends PickType(Message, ['message']) {
  @Field((type) => String, { nullable: true })
  roomId?: string;
  @Field((type) => String, { nullable: true })
  listenerId?: string;
}

@ObjectType()
export class SendMessageOutput extends CoreOutput {
  @Field((type) => Message, { nullable: true })
  message?: Message;
}
