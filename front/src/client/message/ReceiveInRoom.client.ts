import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { requestSubscription } from "react-relay";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveInRoomSubscription } from "./__generated__/ReceiveInRoomSubscription.graphql";

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

interface IReceiveInRoom {
  roomId: string;
  setHasNewMessage: Dispatch<SetStateAction<boolean>>;
}
export const receiveInRoom = ({ roomId, setHasNewMessage }: IReceiveInRoom) => {
  return requestSubscription<ReceiveInRoomSubscription>(environment, {
    subscription: receiveInRoomQuery,
    variables: {
      roomId,
    },
    onNext: (data) => {
      setHasNewMessage(false);
    },
    updater: (proxyStore, { receiveInRoom }) => {
      // 메시지가 왔음을 알린다. (Subscription WS 통신이므로 승인하면 바로 유저에게 알람이 날아감)
      // const newMessageEdge = proxyStore
      //   .getRootField("receiveInRoom")
      //   .getLinkedRecord("edge");
      // if (!newMessageEdge) return;
      // const getRoomRecord = proxyStore.get(roomId);
      // insertEdgeToData({
      //   record: getRoomRecord,
      //   key: "MessagesTable_messagesOfRoomConnection",
      //   newEdge: newMessageEdge,
      // });
    },
  });
};
