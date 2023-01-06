import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { PositionRepository } from 'src/position/position.repository';
import { TeamRepository } from 'src/team/team.repository';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { DeleteUserInput, DeleteUserOutput } from './dtos/delete-user.dto';
import { GetUserInput, GetUserOutput } from './dtos/get-user.dto';
import { GetUsersOutput } from './dtos/get-users.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
    @InjectRepository(PositionRepository)
    private readonly positionRepo: PositionRepository,
    @InjectRepository(TeamRepository) private readonly teamRepo: TeamRepository,
  ) {}

  async getUsers(): Promise<GetUsersOutput> {
    try {
      const findUsers = await this.userRepo.find({
        order: { createdAt: 'DESC' },
      });

      return {
        ok: true,
        users: findUsers,
      };
    } catch (error) {
      return {
        ok: false,
        error: '유저 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getUser({ id: userId }: GetUserInput): Promise<GetUserOutput> {
    try {
      const findUser = await this.userRepo.findOne({
        where: { id: userId },
        relations: { position: true, team: true },
      });
      if (!findUser) {
        return {
          ok: false,
          error: '존재하지 않는 유저입니다.',
        };
      }

      return {
        ok: true,
        user: findUser,
      };
    } catch (error) {
      return {
        ok: false,
        error: '유저 조회에 실패했습니다.',
      };
    }
  }

  async createUser(
    loggedInUser: User,
    {
      email,
      password,
      isManager,
      name,
      position,
      team,
      joinDate,
    }: CreateUserInput,
  ): Promise<CreateUserOutput> {
    try {
      const isExistEmail = await this.userRepo.countBy({ email });
      if (isExistEmail) {
        return {
          ok: false,
          error: '이미 존재하는 이메일입니다.',
        };
      }

      if (position === '대표') {
        return {
          ok: false,
          error: '설정 불가능한 직책입니다.',
        };
      }
      if (loggedInUser.position.position !== '대표' && isManager) {
        return {
          ok: false,
          error: '관리자 권한을 부여할 수 없습니다.',
        };
      }

      const findPosition = await this.positionRepo.findOneBy({ position });
      if (!findPosition) {
        return {
          ok: false,
          error: '존재하지 않는 직책입니다.',
        };
      }

      const findTeam = await this.teamRepo.findOneBy({ team });
      if (!findTeam) {
        return {
          ok: false,
          error: '존재하지 않는 팀입니다.',
        };
      }
      const newUser = this.userRepo.create({
        email,
        password,
        isManager,
        name,
        joinDate,
        position: findPosition,
        team: findTeam,
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

  async updateUser(
    loggedInUser: User,
    {
      id: userId,
      position,
      team,
      isManager,
      ...updateUserInfo
    }: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    try {
      const findUser = await this.userRepo.findOne({
        where: { id: userId },
        relations: {
          position: true,
          team: true,
        },
      });
      if (!findUser) {
        return {
          ok: false,
          error: '존재하지 않는 유저입니다.',
        };
      }

      if (position === '대표') {
        return {
          ok: false,
          error: '누구도 대표자릴 넘볼순 없음',
        };
      }
      if (findUser.position.position === '대표') {
        return {
          ok: false,
          error: '수정할 수 없는 유저입니다.',
        };
      }

      if (loggedInUser.position.position !== '대표' && findUser.isManager) {
        return {
          ok: false,
          error: '관리자인 유저의 계정을 수정할 수 없습니다.',
        };
      }

      let findPosition;
      if (position) {
        findPosition = await this.positionRepo.findOneBy({ position });
        if (!findPosition) {
          return {
            ok: false,
            error: '존재하지 않는 직책입니다.',
          };
        }
      }

      let findTeam;
      if (team) {
        findTeam = await this.teamRepo.findOneBy({ team });
        if (!findTeam) {
          return {
            ok: false,
            error: '존재하지 않는 팀입니다.',
          };
        }
      }

      await this.userRepo.save([
        {
          id: userId,
          ...(findPosition && { position: findPosition }),
          ...(findTeam && { team: findTeam }),
          ...(isManager && { isManager }),
          ...updateUserInfo,
        },
      ]);

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: '계정 수정에 실패했습니다.',
      };
    }
  }

  async deleteUser(
    loggedInUser: User,
    { id: userId }: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    try {
      const findUser = await this.userRepo.findOne({
        where: { id: userId },
        relations: {
          position: true,
        },
      });
      if (!findUser) {
        return {
          ok: false,
          error: '존재하지 않는 유저입니다.',
        };
      }

      if (findUser.id === loggedInUser.id) {
        return {
          ok: false,
          error: '자기 자신을 삭제할 수 없습니다.',
        };
      }

      if (findUser.position.position === '대표') {
        return {
          ok: false,
          error: '삭제할 수 없는 유저입니다.',
        };
      }
      if (loggedInUser.position.position !== '대표' && findUser.isManager) {
        return {
          ok: false,
          error: '관리자인 유저의 계정을 삭제할 수 없습니다.',
        };
      }
      await this.userRepo.delete({ id: userId });

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: '계정 삭제에 실패했습니다.',
      };
    }
  }
}
