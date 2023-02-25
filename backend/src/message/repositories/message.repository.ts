import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@CustomRepository(Message)
export class MessageRepository extends Repository<Message> {
  async findMessage({ messageId }) {}
}
