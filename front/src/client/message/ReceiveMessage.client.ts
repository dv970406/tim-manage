import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction, useMemo } from "react";
import { requestSubscription } from "react-relay";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveMessageSubscription } from "./__generated__/ReceiveMessageSubscription.graphql";

const receiveMessageQuery = graphql`
  subscription ReceiveMessageSubscription {
    receiveMessage {
      ok
      error
      room {
        id
      }
    }
  }
`;

interface IUseReceiveMessage {
  setHasNews: Dispatch<SetStateAction<boolean>>;
}
export const receiveMessage = ({ setHasNews }: IUseReceiveMessage) => {
  return requestSubscription<ReceiveMessageSubscription>(environment, {
    subscription: receiveMessageQuery,
    variables: {},
    onNext: (data) => {
      setHasNews(true);
      // 오디오 파일로 알람 넣어보기
    },
    updater: (proxyStore, { receiveMessage: { room } }) => {
      if (!room) return;

      // myInfo의 unreadMessageCount를 +1
      const userRecord = proxyStore
        .get("client:root:getMyInfo")
        ?.getLinkedRecord("user");
      const unreadMyMessageCount = userRecord?.getValue("unreadMessageCount");
      if (!unreadMyMessageCount && unreadMyMessageCount !== 0) return;
      userRecord?.setValue(+unreadMyMessageCount + 1, "unreadMessageCount");

      // room의 unreadMessageCount를 +1
      const roomRecord = proxyStore.get(room.id);
      const unreadRoomMessageCount = roomRecord?.getValue("unreadMessageCount");
      if (!unreadRoomMessageCount && unreadRoomMessageCount !== 0) return;

      roomRecord?.setValue(+unreadRoomMessageCount + 1, "unreadMessageCount");
    },
  });
};
