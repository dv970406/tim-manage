import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { requestSubscription, useSubscription } from "react-relay";
import { POSITION } from "../../utils/constants/user.constant";
import { insertEdgeToData } from "../../utils/store/connection";
import { environment } from "../client";
import { ReceiveNotificationSubscription } from "./__generated__/ReceiveNotificationSubscription.graphql";

const receiveNotificationQuery = graphql`
  subscription ReceiveNotificationSubscription {
    receiveNotification {
      ok
      error
      edge {
        cursor
        node {
          confirmedVacation {
            id
            startDate
            endDate
            duration
            confirmed {
              byCeo
              byManager
              byLeader
            }
            user {
              id
              name
              team {
                leader {
                  id
                  name
                }
              }
            }
          }
          confirmedByWho {
            id
            name
            position {
              id
              position
            }
          }
        }
      }
    }
  }
`;

interface IUseReceiveNotification {
  setHasNews: Dispatch<SetStateAction<boolean>>;
}
export const receiveNotification = ({
  setHasNews,
}: IUseReceiveNotification) => {
  return requestSubscription<ReceiveNotificationSubscription>(environment, {
    subscription: receiveNotificationQuery,
    variables: {},
    onNext: (data) => {
      setHasNews(true);
      // 오디오 파일로 알람 넣어보기
    },
    updater: (
      proxyStore,
      {
        receiveNotification: {
          edge: {
            node: { confirmedVacation, confirmedByWho },
          },
        },
      }
    ) => {
      // 승인이 되었음을 알린다. (Subscription WS 통신이므로 승인하면 바로 유저에게 알람이 날아감)
      const rootRecord = proxyStore.getRoot();

      const newNotificationEdge = proxyStore
        .getRootField("receiveNotification")
        .getLinkedRecord("edge");

      if (!newNotificationEdge) return;

      insertEdgeToData({
        record: rootRecord,
        key: "NotificationsTable_getNotifications",
        newEdge: newNotificationEdge,
      });

      // 새로운 confirm 상태로 갱신하는 코드
      const targetVacation = proxyStore.get(confirmedVacation.id);
      const newConfirmedStatus = newNotificationEdge
        .getLinkedRecord("node")
        .getLinkedRecord("confirmedVacation")
        .getLinkedRecord("confirmed");

      targetVacation?.setLinkedRecord(newConfirmedStatus, "confirmed");

      // unreadNotificationCount를 +1
      const userRecord = proxyStore
        .get("client:root:getMyInfo")
        ?.getLinkedRecord("user");
      const unreadNotificationCount = userRecord?.getValue(
        "unreadNotificationCount"
      );
      if (!unreadNotificationCount && unreadNotificationCount !== 0) return;
      userRecord?.setValue(
        +unreadNotificationCount + 1,
        "unreadNotificationCount"
      );
    },
  });
};
