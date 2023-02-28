import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const gqlContext = GqlExecutionContext.create(context).getContext();

      const { token } = gqlContext;

      if (token) {
        const userId = this.jwtService.verify(token).toString();

        const { user } = await this.userService.getUser({ userId });

        if (!user) {
          throw new Error('로그인이 필요합니다.');
        }
        gqlContext['user'] = user;

        return true;
      } else {
        throw new Error('로그인이 필요합니다.');
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message || '로그인이 필요합니다.',
      };
    }
  }
}

@Injectable()
export class ManagerGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      const { token } = gqlContext;

      if (token) {
        const userId = this.jwtService.verify(token).toString();

        const { user } = await this.userService.getUser({ userId });

        if (!user || !user.isManager) {
          throw new UnauthorizedException('관리자 권한이 없습니다');
        }
        gqlContext['user'] = user;

        return true;
      } else {
        throw new Error('로그인이 필요합니다.');
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message || '관리자 권한이 없습니다.',
      };
    }
  }
}
