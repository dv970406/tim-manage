import { faBell } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useGetNotifications } from "../../../client/notification/GetNotifications.client";
import { receiveNotification } from "../../../client/notification/ReceiveNotification.client";
import { theme } from "../../../css/theme";
import { NotificationSection } from "../../atomics/sections/sections";
import { SubText } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { ButtonIcon } from "../../molecules/buttons/Buttons";
import NotificationsTable from "./NotificationsTable";

interface INotification {
  unreadNotificationCount?: number;
}
const Notification = ({ unreadNotificationCount }: INotification) => {
  const [hasNotification, setHasNotification] = useState(false);
  useEffect(() => {
    const { dispose } = receiveNotification({
      setHasNotification,
    });
    return () => {
      dispose();
    };
  }, []);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const { notifications } = useGetNotifications();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ButtonIcon
        icon={faBell}
        size="lg"
        onClick={() => {
          setIsNotificationOpen((prev) => !prev);
          setHasNotification(false);
        }}
      />
      {(hasNotification || !!unreadNotificationCount) && (
        <div
          style={{
            position: "absolute",
            top: -5,
            right: -10,
            backgroundColor: theme.bgColors.red,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            width: 20,
            height: 20,
            zIndex: 5,
          }}
        >
          <SubText style={{ fontSize: 10 }}>{unreadNotificationCount}</SubText>
        </div>
      )}
      {isNotificationOpen && (
        <NotificationSection>
          <SubTitle>알람 목록</SubTitle>

          <NotificationsTable notifications={notifications} />
        </NotificationSection>
      )}
    </div>
  );
};

export default Notification;
