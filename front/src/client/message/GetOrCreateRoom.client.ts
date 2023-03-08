import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import {
  commitLocalUpdate,
  ConnectionHandler,
  useLazyLoadQuery,
} from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { environment } from "../client";
import { GetOrCreateRoomQuery } from "./__generated__/GetOrCreateRoomQuery.graphql";

export const getRoomQuery = graphql`
  query GetOrCreateRoomQuery(
    $roomId: ID
    $userId: ID
    $skip: Boolean!
    $first: Int!
    $after: DateTime
  ) {
    getOrCreateRoom(roomId: $roomId, userId: $userId) @skip(if: $skip) {
      ok
      error
      room {
        id
        ...MessagesTable_message
        users {
          id
          name
        }
        unreadMessageCount
      }
    }
  }
`;

interface IUseGetOrCreateRoom {
  roomId?: string;
  userId?: string;
  setHasNewMessage: Dispatch<SetStateAction<boolean>>;
}
export const useGetOrCreateRoom = ({
  roomId,
  userId,
  setHasNewMessage,
}: IUseGetOrCreateRoom) => {
  const { getOrCreateRoom } = useLazyLoadQuery<GetOrCreateRoomQuery>(
    getRoomQuery,
    {
      ...(roomId && { roomId }),
      ...(userId && { userId }),
      skip: !roomId && !userId,
      first: PAGINATION_LOAD_COUNT,
    }
  );

  if ((roomId || userId) && !getOrCreateRoom?.ok) {
    alert(getOrCreateRoom?.error);
  }
  if (getOrCreateRoom?.ok) {
    // 백엔드에서 해당 room의 모든 message들의 isRead를 false => true 업데이트할 것임
    // 따라서 그에 대한 일환으로 Store에서는 room의 unreadMessageCount를 0으로 수정
    // Mutation이 아닌 query에서 store에 접근하려면 commitLocalUpdate 사용
    commitLocalUpdate(environment, (proxyStore) => {
      const roomRecord = proxyStore.get(roomId!);

      if (!roomRecord) return;
      roomRecord.setValue(
        getOrCreateRoom.room?.unreadMessageCount,
        "unreadMessageCount"
      );

      const messagesOfRoomConnection = ConnectionHandler.getConnection(
        roomRecord,
        "MessagesTable_messagesOfRoomConnection"
      );

      if (!messagesOfRoomConnection) return;
      roomRecord
        ?.getLinkedRecord("edges")
        ?.setLinkedRecord(messagesOfRoomConnection, "node");

      setHasNewMessage(false);
    });
  }
  return { room: getOrCreateRoom?.room };
};
