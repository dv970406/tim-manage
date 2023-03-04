import { CustomRepository } from 'src/core/repository/custom.decorator';
import { POSITION_CEO } from 'src/core/variables/position';
import { And, In, Repository } from 'typeorm';
import { Room } from '../entity/room.entity';

@CustomRepository(Room)
export class RoomRepository extends Repository<Room> {
  async findRoom({ roomId }) {
    const room = await this.findOne({
      where: {
        id: roomId,
      },
      order: {
        createdAt: 'DESC',
      },
      relations: {
        users: true,
      },
    });
    if (!room) throw new Error('찾을 수 없는 방입니다.');

    return room;
  }
}
