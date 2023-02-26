import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from 'src/jwt/jwt.service';
import { PositionModule } from 'src/position/position.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { LoginGuard, ManagerGuard } from './auth.guard';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: LoginGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ManagerGuard,
    },
  ],
})
export class AuthModule {}
