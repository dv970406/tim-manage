import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserRepository } from 'src/user/user.repository';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { MessageRepository } from './repositories/message.repository';
import { RoomRepository } from './repositories/room.repository';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      UserRepository,
      RoomRepository,
      MessageRepository,
    ]),
  ],
  providers: [MessageResolver, MessageService, RoomResolver, RoomService],
})
export class MessageModule {}
