import { UseGuards } from '@nestjs/common';
import {
  Args,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { LoggedInUser } from 'src/auth/auth-user.decorator';
import { LoginGuard } from 'src/auth/auth.guard';
import { ConnectionInput } from 'src/core/dtos/pagination.dto';
import { User } from 'src/user/entities/user.entity';
import { pubsub, TRIGGER_RECEIVE_IN_ROOM } from 'src/utils/subscription';
import { MessagesConnection } from './dtos/messages/message-pagination.dto';
import { ExitRoomInput, ExitRoomOutput } from './dtos/rooms/delete-room.dto';
import { GetRoomInput, GetRoomOutput } from './dtos/rooms/get-room.dto';
import { GetRoomsInput, GetRoomsOutput } from './dtos/rooms/get-rooms.dto';
import {
  ReceiveInRoomInput,
  ReceiveInRoomOutput,
} from './dtos/rooms/receive-inRoom.dto';
import { Room } from './entity/room.entity';
import { RoomService } from './room.service';

@Resolver((of) => Room)
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Subscription((type) => ReceiveInRoomOutput, {
    // subscription이 감지중인 room의 id와 유저가 보낸 메시지가 속한 room의 id가 같은지 체크하는 filter
    filter: ({ receiveInRoom }, { roomId }, { user: loggedInUser }) => {
      const isRoomMember = receiveInRoom.edge.node.room.users.find(
        (member) => member.id === loggedInUser.id,
      );

      if (!isRoomMember) return false;

      return receiveInRoom.edge.node.room.id === roomId;
    },

    // subscription에 나타낼 데이터의 모양은 resolve가 정한다.
    resolve: ({ receiveInRoom }) => {
      return receiveInRoom;
    },
  })
  @UseGuards(LoginGuard)
  receiveInRoom(@Args() receiveInRoomInput: ReceiveInRoomInput) {
    return pubsub.asyncIterator(TRIGGER_RECEIVE_IN_ROOM);
  }

  @ResolveField((type) => Int)
  @UseGuards(LoginGuard)
  unreadMessageCount(@LoggedInUser() loggedInUser: User, @Parent() room: Room) {
    return this.roomService.unreadMessageCount(loggedInUser, room);
  }

  @ResolveField((type) => MessagesConnection)
  @UseGuards(LoginGuard)
  messagesOfRoomConnection(
    @Parent() room: Room,
    @Args() roomConnectionInput: ConnectionInput,
  ): Promise<MessagesConnection> {
    return this.roomService.messagesOfRoomConnection(room, roomConnectionInput);
  }

  @Query((type) => GetRoomsOutput)
  @UseGuards(LoginGuard)
  getRooms(
    @LoggedInUser() loggedInUser: User,
    @Args() getRoomsInput: GetRoomsInput,
  ): Promise<GetRoomsOutput> {
    return this.roomService.getRooms(loggedInUser, getRoomsInput);
  }

  @Query((type) => GetRoomOutput)
  @UseGuards(LoginGuard)
  getRoom(
    @LoggedInUser() loggedInUser: User,
    @Args() getRoomInput: GetRoomInput,
  ): Promise<GetRoomsOutput> {
    return this.roomService.getRoom(loggedInUser, getRoomInput);
  }

  @Mutation((type) => ExitRoomOutput)
  @UseGuards(LoginGuard)
  exitRoom(
    @LoggedInUser() loggedInUser: User,
    @Args('input') exitRoomInput: ExitRoomInput,
  ): Promise<ExitRoomOutput> {
    return this.roomService.exitRoom(loggedInUser, exitRoomInput);
  }
}
