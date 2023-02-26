import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/user.repository';
import { MeetingRepository } from './meeting.repository';
import { MeetingResolver } from './meeting.resolver';
import { MeetingService } from './meeting.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      MeetingRepository,
      UserRepository,
    ]),
    UserModule,
  ],
  providers: [MeetingService, MeetingResolver],
})
export class MeetingModule {}
