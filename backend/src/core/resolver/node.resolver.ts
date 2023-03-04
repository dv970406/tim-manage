import {
  Args,
  ID,
  Info,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/message/entity/room.entity';
import { RoomRepository } from 'src/message/repositories/room.repository';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { NodeInput, Node } from '../dtos/node.dto';

@Resolver((of) => Node)
export class NodeResolver {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
    @InjectRepository(RoomRepository)
    private readonly roomRepo: RoomRepository,
  ) {}

  @Query((type) => Node)
  async node(@Args() { id }: NodeInput) {
    // Retrieve node from database (e.g., using TypeORM)

    // 여기서 return한 것이 Node의 @interfaceType의 첫 번째 파라미터로 간다.
    const user = await this.userRepo.findOneBy({ id });
    if (user && User.isTypeOf(user)) {
      return user as User;
    }
    const room = await this.roomRepo.findOneBy({ id });
    if (room && Room.isTypeOf(room)) {
      return room as Room;
    }
  }
}
