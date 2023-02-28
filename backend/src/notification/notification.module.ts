import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { UserModule } from 'src/user/user.module';
import { Notification } from './entities/notification.entity';
import { NotificationRepository } from './notification.repository';
import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([NotificationRepository]),
    UserModule,
  ],
  providers: [NotificationResolver, NotificationService],
})
export class NotificationModule {}
