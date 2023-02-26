import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetRoomQuery } from "./__generated__/GetRoomQuery.graphql";

export const getRoomQuery = graphql`
  query GetRoomQuery($roomId: ID!, $skip: Boolean!) {
    getRoom(roomId: $roomId) @skip(if: $skip) {
      ok
      error
      room {
        id
        users {
          id
          name
        }
        messagesOfRoomConnection {
          edges {
            node {
              id
              message
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`;

export const useGetRoom = (roomId: string) => {
  const { getRoom } = useLazyLoadQuery<GetRoomQuery>(getRoomQuery, {
    roomId,
    skip: !roomId,
  });

  if (roomId && !getRoom?.ok) {
    alert(getRoom?.error);
  }
  return { room: getRoom?.room };
};
