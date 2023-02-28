import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';

@CustomRepository(Notification)
export class NotificationRepository extends Repository<Notification> {}
