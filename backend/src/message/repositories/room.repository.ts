import { CustomRepository } from 'src/core/repository/custom.decorator';
import { POSITION_CEO } from 'src/core/variables/position';
import { And, In, Repository } from 'typeorm';
import { Room } from '../entity/room.entity';

@CustomRepository(Room)
export class RoomRepository extends Repository<Room> {
  async findOrCreateRoom({ roomId, listener, loggedInUser }) {
    let room: Room;

    if (!roomId && !listener) {
      throw new Error('상대방에 대한 정보가 없습니다.');
    }
    if (listener) {
      // 이 로직은 다른 데이터 테이블과 달리 room 데이터가 없으면 에러를 내는 것이 아니라 새로운 방을 만들어줘야함
      room = await this.save({
        users: [listener, loggedInUser],
      });
    } else if (roomId) {
      room = await this.findOne({
        where: {
          id: roomId,
        },
        relations: {
          users: true,
        },
      });
      if (!room) throw new Error('찾을 수 없는 방입니다.');
    }

    return room;
  }
}
