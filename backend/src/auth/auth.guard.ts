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
          return false;
        }
        gqlContext['user'] = user;

        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
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
          return false;
        }
        gqlContext['user'] = user;

        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
