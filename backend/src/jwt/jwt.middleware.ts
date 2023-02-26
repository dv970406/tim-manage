import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { JwtService } from './jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      // if ('token' in req.headers) {
      //   const { token } = req.headers;
      //   const userId = this.jwtService.verify(token.toString()).toString();
      //   const { user } = await this.userService.getUser({ userId });
      //   req['user'] = user;
      // }
    } catch (error) {
      return null;
    } finally {
      next();
    }
  }
}
