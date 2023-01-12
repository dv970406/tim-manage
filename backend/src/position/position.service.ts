import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePositionInput,
  CreatePositionOutput,
} from './dtos/create-position.dto';
import {
  DeletePositionInput,
  DeletePositionOutput,
} from './dtos/delete-position.dto';
import {
  GetUsersOfPositionInput,
  GetUsersOfPositionOutput,
} from './dtos/get-usersOfPosition.dto';
import { GetPositionsOutput } from './dtos/get-positions.dto';
import {
  UpdatePositionInput,
  UpdatePositionOutput,
} from './dtos/update-position.dto';
import { PositionRepository } from './position.repository';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionRepository)
    private readonly positionRepo: PositionRepository,
  ) {}
  async getPositions(): Promise<GetPositionsOutput> {
    try {
      const findPositions = await this.positionRepo.find({
        order: { createdAt: 'DESC' },
      });
      return {
        ok: true,
        positions: findPositions,
      };
    } catch (error) {
      return {
        ok: false,
        error: '직책 리스트 조회에 실패했습니다.',
      };
    }
  }

  async getUsersOfPosition({
    _id: positionId,
  }: GetUsersOfPositionInput): Promise<GetUsersOfPositionOutput> {
    try {
      const findPosition = await this.positionRepo.findPosition({ positionId });
      return {
        ok: true,
        users: findPosition.users,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 조회에 실패했습니다.',
      };
    }
  }

  async createPosition({
    position,
  }: CreatePositionInput): Promise<CreatePositionOutput> {
    try {
      await this.positionRepo.checkExistPositionName({ position });

      await this.positionRepo.save({ position });
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 생성에 실패했습니다.',
      };
    }
  }

  async updatePosition({
    _id: positionId,
    position,
  }: UpdatePositionInput): Promise<UpdatePositionOutput> {
    try {
      await this.positionRepo.checkExistPositionName({ position });

      await this.positionRepo.findPosition({ positionId });

      await this.positionRepo.save([{ _id: positionId, position }]);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 수정에 실패했습니다.',
      };
    }
  }
  async deletePosition({
    _id: positionId,
  }: DeletePositionInput): Promise<DeletePositionOutput> {
    try {
      await this.positionRepo.findPosition({ positionId });

      await this.positionRepo.delete({ _id: positionId });
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 삭제에 실패했습니다.',
      };
    }
  }
}
