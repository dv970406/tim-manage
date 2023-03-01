import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from 'src/user/user.module';
import { LoginGuard, ManagerGuard } from './auth.guard';

@Module({
  imports: [UserModule],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: LoginGuard,
  //   },
  //   {
  //     provide: APP_GUARD,
  //     useClass: ManagerGuard,
  //   },
  // ],
})
export class AuthModule {}
