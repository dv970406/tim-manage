import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction, useMemo } from "react";
import { ConnectionHandler, requestSubscription } from "react-relay";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveMessageSubscription } from "./__generated__/ReceiveMessageSubscription.graphql";

const receiveMessageQuery = graphql`
  subscription ReceiveMessageSubscription {
    receiveMessage {
      ok
      error
      edge {
        cursor
        node {
          id
          users {
            id
            name
          }
          unreadMessageCount
          recentMessage {
            id
            message
          }
        }
      }
      isMyAlarm
    }
  }
`;

interface IUseReceiveMessage {
  setHasNewMessage: Dispatch<SetStateAction<boolean>>;
}
export const receiveMessage = ({ setHasNewMessage }: IUseReceiveMessage) => {
  return requestSubscription<ReceiveMessageSubscription>(environment, {
    subscription: receiveMessageQuery,
    variables: {},
    onNext: (data) => {
      if (data?.receiveMessage.isMyAlarm) {
        setHasNewMessage(true);
      }
      // 오디오 파일로 알람 넣어보기
    },
    updater: (proxyStore, { receiveMessage: { edge } }) => {
      if (!edge?.node.id) return;

      const newRoomEdge = proxyStore
        .getRootField("receiveMessage")
        .getLinkedRecord("edge");
      if (!newRoomEdge) return;

      const rootRecord = proxyStore.getRoot();

      const roomsConnection = ConnectionHandler.getConnection(
        rootRecord,
        "RoomsTable_getRooms"
      );

      const isExistRoom = roomsConnection
        ?.getLinkedRecords("edges")
        ?.find(
          (room) => room.getLinkedRecord("node")?.getDataID() === edge?.node?.id
        )
        ?.getLinkedRecord("node")
        ?.getDataID();
      if (isExistRoom) return;

      insertEdgeToData({
        record: rootRecord,
        key: "RoomsTable_getRooms",
        newEdge: newRoomEdge,
      });
    },
  });
};
