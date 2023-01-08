import { Injectable, NestMiddleware } from '@nestjs/common';
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
    if ('token' in req.headers) {
      try {
        const { token } = req.headers;
        const userId = this.jwtService.verify(token.toString());
        const { user } = await this.userService.getUser({ id: +userId });
        req['user'] = user;
      } catch (error) {
        return '로그인이 필요합니다.';
      }
    }
    next();
  }
}
