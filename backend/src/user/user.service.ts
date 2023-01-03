import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({
    email,
    password,
  }: CreateUserInput): Promise<CreateUserOutput> {
    try {
      const checkExistUser = await this.userRepo.countBy({ email });
      if (checkExistUser) {
        return {
          ok: false,
          error: '이미 존재하는 이메일입니다.',
        };
      }

      const newUser = this.userRepo.create({
        email,
        password,
      });

      await this.userRepo.save(newUser);

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: '계정 생성에 실패했습니다.',
      };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const findUser = await this.userRepo.findOneBy({ email });

      if (!findUser) {
        return {
          ok: false,
          error: '존재하지 않는 이메일입니다.',
        };
      }

      const checkPassword = await findUser.checkPassword(password);
      if (!checkPassword) {
        return {
          ok: false,
          error: '비밀번호가 일치하지 않습니다.',
        };
      }

      const token = this.jwtService.sign(findUser.id);
      return {
        ok: true,
        token,
      };
    } catch (error) {
      return {
        ok: false,
        error: '로그인에 실패했습니다.',
      };
    }
  }

  async findById({ userId }) {
    try {
      // findOneByOrFail은 있으면 return하고 없으면 에러를 던짐(예외처리)
      const user = await this.userRepo.findOneByOrFail({ id: userId });
      if (!user) throw new Error();
      return {
        ok: Boolean(user),
        user,
      };
    } catch (error) {
      return {
        ok: false,
        error: '찾을 수 없는 유저입니다.',
      };
    }
  }
}
