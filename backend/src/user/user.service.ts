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
      const targetUser = await this.userRepo.findUser({ userId });

      return {
        ok: true,
        user: targetUser,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '계정 조회에 실패했습니다.',
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
      joinDate,
      positionId,
      teamId,
    }: CreateUserInput,
  ): Promise<CreateUserOutput> {
    try {
      const isExistEmail = await this.userRepo.countBy({ email });
      if (isExistEmail) {
        throw new Error('이미 존재하는 이메일입니다.');
      }

      if (loggedInUser.position.position !== '대표' && isManager) {
        throw new Error('관리자 권한을 부여할 수 없습니다.');
      }

      const findPosition = await this.positionRepo.findPosition({ positionId });
      if (findPosition.position === '대표') {
        throw new Error('설정 불가능한 직책입니다.');
      }

      const findTeam = await this.teamRepo.findTeam({ teamId });

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
        error: error.message || '계정 생성에 실패했습니다.',
      };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const findUser = await this.userRepo.findOneBy({ email });

      if (!findUser) {
        throw new Error('존재하지 않는 이메일입니다.');
      }

      const checkPassword = await findUser.checkPassword(password);
      if (!checkPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      const token = this.jwtService.sign(findUser.id);
      return {
        ok: true,
        token,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '로그인에 실패했습니다.',
      };
    }
  }

  async updateUser(
    loggedInUser: User,
    {
      id: userId,
      positionId,
      teamId,
      isManager,
      availableVacation,
      ...updateUserInfo
    }: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    try {
      const targetUser = await this.userRepo.findUser({ userId });

      this.userRepo.protectManagerAndCEO({
        targetUser,
        loggedInUser,
        type: '수정',
      });

      if (loggedInUser.position.position !== '대표' && isManager) {
        throw new Error('관리자 권한을 부여할 수 없습니다.');
      }

      if (availableVacation) {
        if (userId === loggedInUser.id) {
          throw new Error('본인의 연차는 수정할 수 없습니다.');
        }
      }
      let findPosition;
      if (positionId) {
        findPosition = await this.positionRepo.findPosition({ positionId });
        if (findPosition.position === '대표') {
          throw new Error('설정 불가능한 직책입니다.');
        }
      }

      let findTeam;
      if (teamId) {
        findTeam = await this.teamRepo.findTeam({ teamId });
      }

      await this.userRepo.save([
        {
          id: userId,
          ...(findPosition && { position: findPosition }),
          ...(findTeam && { team: findTeam }),
          ...(isManager && { isManager }),
          availableVacation,
          ...updateUserInfo,
        },
      ]);

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '계정 수정에 실패했습니다.',
      };
    }
  }

  async deleteUser(
    loggedInUser: User,
    { id: userId }: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    try {
      const targetUser = await this.userRepo.findUser({ userId });

      this.userRepo.protectManagerAndCEO({
        targetUser,
        loggedInUser,
        type: '삭제',
      });

      if (userId === loggedInUser.id) {
        throw new Error('자기 자신을 삭제할 수 없습니다.');
      }

      await this.userRepo.delete({ id: userId });

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '계정 삭제에 실패했습니다.',
      };
    }
  }
}
