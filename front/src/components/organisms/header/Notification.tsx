import { faBell } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useGetNotifications } from "../../../client/notification/GetNotifications.client";
import { subscriptionConfirmVacation } from "../../../client/vacation/SubscriptionConfirmVacation.client";
import { theme } from "../../../css/theme";
import { NotificationSection } from "../../atomics/sections/sections";
import { SubTitle } from "../../atomics/typographys/titles";
import { ButtonIcon } from "../../molecules/buttons/Buttons";
import RoomsTable from "../../templates/content/message/RoomsTable";
import NotificationsTable from "./NotificationsTable";

interface INotification {
  unreadNotificationCount?: number;
}
const Notification = ({ unreadNotificationCount }: INotification) => {
  const [hasNews, setHasNews] = useState(false);
  useEffect(() => {
    const { dispose } = subscriptionConfirmVacation({
      setHasNews,
    });
    return () => {
      dispose();
    };
  }, []);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const { notifications } = useGetNotifications();

  console.log(unreadNotificationCount);
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
          setHasNews(false);
        }}
      />
      {(hasNews || !!unreadNotificationCount) && (
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
          {unreadNotificationCount}
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
