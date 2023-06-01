import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { ReadNotificationMutation$variables } from "../../../client/notification/__generated__/ReadNotificationMutation.graphql";
import { theme } from "../../../css/theme";
import { getElaspedDay, vacationDateFormat } from "../../../utils/func/time";
import { ColumnBox, RowBox } from "../../atomics/boxes/FlexBox";
import { ListItem } from "../../atomics/boxes/ScrollBox";
import { AccentText, DateText } from "../../atomics/typographys/Etc";
import { SubText, SubTitle } from "../../atomics/typographys/Sub";
import { IconBox } from "../../molecules/boxes/IconBox";
import { NotificationTableContent_notification$key } from "./__generated__/NotificationTableContent_notification.graphql";

interface INotificationTableContent {
  notification: NotificationTableContent_notification$key;
  readNotificationLoading: boolean;
  readNotificationMutation: (
    variables: ReadNotificationMutation$variables
  ) => void;
}

const notificationTableContentFragment = graphql`
  fragment NotificationTableContent_notification on Notification {
    id
    confirmedVacation {
      id
      startDate
      endDate
      duration
      confirmed {
        byCeo
        byLeader
        byManager
      }
      createdAt
    }
    confirmedByWho {
      id
      name
    }
    isRead
  }
`;
const NotificationTableContent = ({
  notification,
  readNotificationLoading,
  readNotificationMutation,
}: INotificationTableContent) => {
  const {
    id: notificationId,
    confirmedByWho,
    confirmedVacation,
    isRead,
  } = useFragment(notificationTableContentFragment, notification);

  const confirmedDate = getElaspedDay(confirmedVacation?.createdAt);

  const handleReadNotification = () => {
    if (readNotificationLoading) return;

    readNotificationMutation({
      notificationId,
    });
  };

  return (
    <ListItem
      style={{
        cursor: isRead ? "default" : "pointer",
        opacity: isRead ? theme.disabled.opacity : 1,
      }}
      {...(!isRead && { onClick: handleReadNotification })}
    >
      <RowBox
        style={{
          gap: theme.spacing.lg,
          justifyContent: "space-between",
        }}
      >
        <IconBox icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <ColumnBox style={{ placeSelf: "flex-end" }} gap={theme.spacing.sm}>
          <DateText style={{ textAlign: "right" }}>
            {vacationDateFormat(confirmedVacation?.startDate as Date)}
            {` ~ `}
            {vacationDateFormat(confirmedVacation?.endDate as Date)}(
            <AccentText style={{ textAlign: "right" }}>
              {confirmedVacation?.duration}일
            </AccentText>
            )
          </DateText>

          <SubText style={{ textAlign: "right" }}>
            {confirmedByWho?.name}님이 승인했습니다!
          </SubText>

          <RowBox style={{ placeSelf: "flex-end", width: "auto" }}>
            {confirmedVacation?.confirmed.byCeo ? (
              <SubTitle style={{ color: theme.colors.green }}>대표</SubTitle>
            ) : (
              <SubTitle style={{ textDecoration: "line-through" }}>
                대표
              </SubTitle>
            )}
            {confirmedVacation?.confirmed.byManager ? (
              <SubTitle style={{ color: theme.colors.green }}>관리자</SubTitle>
            ) : (
              <SubTitle style={{ textDecoration: "line-through" }}>
                관리자
              </SubTitle>
            )}
            {confirmedVacation?.confirmed.byLeader ? (
              <SubTitle style={{ color: theme.colors.green }}>리더</SubTitle>
            ) : (
              <SubTitle style={{ textDecoration: "line-through" }}>
                리더
              </SubTitle>
            )}
          </RowBox>
          <SubTitle style={{ textAlign: "right" }}>{confirmedDate}</SubTitle>
        </ColumnBox>
      </RowBox>
    </ListItem>
  );
};

export default React.memo(NotificationTableContent);
