import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class LoginGuard implements CanActivate {
  //
  canActivate(context: ExecutionContext): any {
    try {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      const user = gqlContext['user'];
      if (!user) {
        throw new Error('로그인이 필요합니다.');
      }
      return true;
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
  canActivate(context: ExecutionContext): any {
    try {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      const user = gqlContext['user'];
      if (!user || !user.isManager)
        throw new UnauthorizedException('관리자 권한이 없습니다');
      return true;
    } catch (error) {
      return {
        ok: false,
        error: error.message || '관리자 권한이 없습니다.',
      };
    }
  }
}
