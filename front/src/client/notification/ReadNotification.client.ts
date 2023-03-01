import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { environment } from "../client";
import {
  ReadNotificationMutation,
  ReadNotificationMutation$variables,
} from "./__generated__/ReadNotificationMutation.graphql";

const readNotificationQuery = graphql`
  mutation ReadNotificationMutation($notificationId: ID!) {
    readNotification(input: { notificationId: $notificationId }) {
      ok
      error
      notification {
        id
      }
    }
  }
`;

export const useReadNotification = () => {
  const [readNotificationLoading, setIsLoading] = useState(false);

  const readNotificationMutation = (
    variables: ReadNotificationMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<ReadNotificationMutation>(environment, {
      mutation: readNotificationQuery,
      variables,
      onCompleted: ({ readNotification: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
      updater: (proxyStore, { readNotification: { notification } }) => {
        if (!notification) return;
        // 읽음 상태로 처리
        const notificationRecord = proxyStore.get(notification.id);
        notificationRecord?.setValue(true, "isRead");

        const userRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");
        const unreadNotificationCount = userRecord?.getValue(
          "unreadNotificationCount"
        );
        if (!unreadNotificationCount && unreadNotificationCount !== 0) return;
        userRecord?.setValue(
          +unreadNotificationCount - 1,
          "unreadNotificationCount"
        );
      },
    });
  };

  return { readNotificationMutation, readNotificationLoading };
};
