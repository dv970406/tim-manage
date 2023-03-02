import { graphql } from "babel-plugin-relay/macro";
import { requestSubscription } from "react-relay";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveInRoomSubscription } from "./__generated__/SubscriptionRoomSubscription.graphql";

const receiveInRoomQuery = graphql`
  subscription ReceiveInRoomSubscription($roomId: ID!) {
    receiveInRoom(roomId: $roomId) {
      ok
      error
      edge {
        cursor
        node {
          id
          message
          user {
            id
            name
          }
          createdAt
          isMine
        }
      }
    }
  }
`;

export const receiveInRoom = (roomId: string) => {
  return requestSubscription<ReceiveInRoomSubscription>(environment, {
    subscription: receiveInRoomQuery,
    variables: {
      roomId,
    },
    onNext: (data) => {},
    updater: (proxyStore) => {
      // 메시지가 왔음을 알린다. (Subscription WS 통신이므로 승인하면 바로 유저에게 알람이 날아감)

      const newMessageEdge = proxyStore
        .getRootField("receiveInRoom")
        .getLinkedRecord("edge");

      if (!newMessageEdge) return;

      const getRoomRecord = proxyStore
        .get(`client:root:getRoom(roomId:"${roomId}")`)
        ?.getLinkedRecord("room");

      insertEdgeToData({
        record: getRoomRecord,
        key: "MessagesTable_messagesOfRoomConnection",
        newEdge: newMessageEdge,
      });
    },
  });
};
