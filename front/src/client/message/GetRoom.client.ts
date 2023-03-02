import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { GetRoomQuery } from "./__generated__/GetRoomQuery.graphql";

export const getRoomQuery = graphql`
  query GetRoomQuery(
    $roomId: ID!
    $skip: Boolean!
    $first: Int!
    $after: DateTime
  ) {
    getRoom(roomId: $roomId) @skip(if: $skip) {
      ok
      error
      room {
        id
        users {
          id
          name
        }
        ...MessagesTable_message
      }
    }
  }
`;

export const useGetRoom = (roomId: string) => {
  const { getRoom } = useLazyLoadQuery<GetRoomQuery>(getRoomQuery, {
    roomId,
    skip: !roomId,
    first: PAGINATION_LOAD_COUNT,
  });

  if (roomId && !getRoom?.ok) {
    alert(getRoom?.error);
  }
  return { room: getRoom?.room };
};
