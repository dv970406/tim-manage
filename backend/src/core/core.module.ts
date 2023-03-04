import { Module } from '@nestjs/common';
import { RoomRepository } from 'src/message/repositories/room.repository';
import { UserRepository } from 'src/user/user.repository';
import { CustomTypeOrmModule } from './repository/custom-typeorm.module';
import { NodeResolver } from './resolver/node.resolver';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([UserRepository, RoomRepository]),
  ],
  providers: [NodeResolver],
})
export class CoreModule {}
