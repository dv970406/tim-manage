import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DB_TABLE } from 'src/core/variables/constants';
import {
  CreatePositionInput,
  CreatePositionOutput,
} from './dtos/create-position.dto';
import {
  DeletePositionInput,
  DeletePositionOutput,
} from './dtos/delete-position.dto';
import { GetPositionInput, GetPositionOutput } from './dtos/get-position.dto';
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

  async getPosition({
    id: positionId,
  }: GetPositionInput): Promise<GetPositionOutput> {
    try {
      const findPosition = await this.positionRepo.findPosition({ positionId });

      return {
        ok: true,
        position: findPosition,
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

      const newPosition = await this.positionRepo.save({ position });

      return {
        ok: true,
        position: newPosition,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 생성에 실패했습니다.',
      };
    }
  }

  async updatePosition({
    id: positionId,
    position,
  }: UpdatePositionInput): Promise<UpdatePositionOutput> {
    try {
      await this.positionRepo.checkExistPositionName({ position });

      await this.positionRepo.findPosition({ positionId });

      await this.positionRepo.save([{ id: positionId, position }]);

      const updatedPosition = await this.positionRepo.findPosition({
        positionId,
      });

      return {
        ok: true,
        position: updatedPosition,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 수정에 실패했습니다.',
      };
    }
  }
  async deletePosition({
    id: positionId,
  }: DeletePositionInput): Promise<DeletePositionOutput> {
    try {
      const findPosition = await this.positionRepo.findPosition({ positionId });

      if (findPosition.users.length > 0) {
        throw new Error(
          '직책에 속한 자가 없어야 삭제가 가능합니다. 속한 유저의 직책을 변경해주세요.',
        );
      }

      await this.positionRepo.delete({ id: positionId });
      return {
        ok: true,
        deletedPositionId: positionId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 삭제에 실패했습니다.',
      };
    }
  }
}
