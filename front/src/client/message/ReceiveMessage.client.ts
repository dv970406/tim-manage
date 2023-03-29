import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction, useMemo } from "react";
import { ConnectionHandler, requestSubscription } from "react-relay";
import { playAudio } from "../../utils/audio/audio";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveMessageSubscription } from "./__generated__/ReceiveMessageSubscription.graphql";

const receiveMessageQuery = graphql`
  subscription ReceiveMessageSubscription {
    receiveMessage {
      ok
      error
      roomEdge {
        cursor
        node {
          id
          users {
            id
            name
          }
          unreadMessageCount
        }
      }
      messageEdge {
        cursor
        node {
          id
          isMine
          message
          user {
            id
            name
          }
          createdAt
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
        playAudio("/alarm.mp3");
      }
      // 오디오 파일로 알람 넣어보기
    },
    updater: (proxyStore, { receiveMessage: { roomEdge } }) => {
      const roomId = roomEdge?.node.id;
      if (!roomId) return;

      // room이 이제 만들어진 방이라면 Room Connection에 추가하고 이미 존재하는 방이라면 바로 Message Connection으로
      const newRoomEdge = proxyStore
        .getRootField("receiveMessage")
        .getLinkedRecord("roomEdge");
      if (!newRoomEdge) return;

      const rootRecord = proxyStore.getRoot();

      const roomsConnection = ConnectionHandler.getConnection(
        rootRecord,
        "RoomsTable_getRooms"
      );

      const isExistRoom = roomsConnection
        ?.getLinkedRecords("edges")
        ?.find((room) => room.getLinkedRecord("node")?.getDataID() === roomId)
        ?.getLinkedRecord("node")
        ?.getDataID();

      if (!isExistRoom) {
        insertEdgeToData({
          record: rootRecord,
          key: "RoomsTable_getRooms",
          newEdge: newRoomEdge,
        });
      } else {
        // 받은 message를 그 room에 추가
        const newMessageEdge = proxyStore
          .getRootField("receiveMessage")
          .getLinkedRecord("messageEdge");

        if (!newMessageEdge) return;

        // 받은 message를 room의 recentMessage로 갱신
        const room = proxyStore.get(roomId);
        const newMessage = newMessageEdge.getLinkedRecord("node");

        room?.setLinkedRecord(newMessage, "recentMessage");

        const getRoomRecord = proxyStore.get(roomId);

        insertEdgeToData({
          record: getRoomRecord,
          key: "MessagesTable_messagesOfRoomConnection",
          newEdge: newMessageEdge,
        });
      }
    },
  });
};
