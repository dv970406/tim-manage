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
import { pubsub, TRIGGER_SEND_MESSAGE } from 'src/utils/subscription';
import { MessagesConnection } from './dtos/messages/message-pagination.dto';
import { ExitRoomInput, ExitRoomOutput } from './dtos/rooms/delete-room.dto';
import { GetRoomInput, GetRoomOutput } from './dtos/rooms/get-room.dto';
import { GetRoomsInput, GetRoomsOutput } from './dtos/rooms/get-rooms.dto';
import { RoomsConnection } from './dtos/rooms/room-pagination.dto';
import { SubscriptionRoomInput } from './dtos/rooms/subscription-room.dto';
import { Message } from './entity/message.entity';
import { Room } from './entity/room.entity';
import { RoomService } from './room.service';

@Resolver((of) => Room)
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Subscription((type) => Message, {
    // subscription이 감지중인 room의 id와 유저가 보낸 메시지가 속한 room의 id가 같은지 체크하는 filter
    filter: ({ subscriptionRoom }, { roomId }, context) => {
      const isRoomMember = subscriptionRoom.room.users.find(
        (member) => member.id === subscriptionRoom.userId,
      );
      if (!isRoomMember) return false;

      return subscriptionRoom.roomId === roomId;
    },

    // subscription에 나타낼 데이터의 모양은 resolve가 정한다.
    resolve: ({ subscriptionRoom }) => {
      return subscriptionRoom;
    },
  })
  @UseGuards(LoginGuard)
  subscriptionRoom(@Args() subscriptionRoomInput: SubscriptionRoomInput) {
    return pubsub.asyncIterator(TRIGGER_SEND_MESSAGE);
  }

  @ResolveField((type) => Int)
  unreadCount(@Parent() room: Room) {
    return this.roomService.unreadCount(room);
  }

  @ResolveField((type) => MessagesConnection)
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
