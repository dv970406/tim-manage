import styled from "@emotion/styled";
import { faBell } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useGetNotifications } from "../../../client/notification/GetNotifications.client";
import { receiveNotification } from "../../../client/notification/ReceiveNotification.client";
import { theme } from "../../../css/theme";
import { CenterBox, RowBox } from "../../atomics/boxes/FlexBox";
import { SubText, SubTitle } from "../../atomics/typographys/Sub";
import { IconButton } from "../../molecules/buttons/IconButton";
import NotificationsTable from "./NotificationsTable";

const NotificationSection = styled.section(({ theme }) => ({
  backdropFilter: theme.bgColors.backdropFilter,
  background: theme.bgColors.gray,
  width: 300,
  height: 300,
  borderRadius: theme.borderRadius.lg,
  borderTopRightRadius: 0,
  padding: theme.spacing.lg,
  display: "flex",
  flexDirection: "column",
  gap: theme?.spacing.sm,

  position: "absolute",
  top: 25,
  right: 10,
  zIndex: 5,
}));
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

  const handleNotificationTab = () => {
    setIsNotificationOpen((prev) => !prev);
    setHasNotification(false);
  };
  return (
    <RowBox
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <IconButton icon={faBell} size="lg" onClick={handleNotificationTab} />
      {(hasNotification || !!unreadNotificationCount) && (
        <CenterBox
          style={{
            position: "absolute",
            top: -5,
            right: -10,
            backgroundColor: theme.bgColors.red,
            borderRadius: "50%",
            width: 20,
            height: 20,
            zIndex: 5,
          }}
        >
          <SubText style={{ fontSize: theme.fonts.xs }}>
            {unreadNotificationCount}
          </SubText>
        </CenterBox>
      )}
      {isNotificationOpen && (
        <NotificationSection>
          <SubTitle>알람 목록</SubTitle>

          <NotificationsTable notifications={notifications} />
        </NotificationSection>
      )}
    </RowBox>
  );
};

export default Notification;
