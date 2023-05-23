import { faMessage, faRotate } from "@fortawesome/pro-solid-svg-icons";
import React, { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { receiveMessage } from "../../../client/message/ReceiveMessage.client";
import { useGetRooms } from "../../../client/message/GetRooms.client";
import { useGetSpeakableUsers } from "../../../client/user/GetSpeakableUsers.client";
import { CircleIconButton } from "../../molecules/buttons/CircleIconButton";
import { theme } from "../../../css/theme";
import Loading from "../../molecules/shared/Loading";
import MessagesTable from "../content/message/MessagesTable";
import { SubTitle } from "../../atomics/typographys/Sub";
import { RowBox } from "../../atomics/boxes/FlexBox";
import { IconButton } from "../../molecules/buttons/IconButton";
import SpeakableUsersTable from "../content/message/SpeakableUsersTable";
import RoomsTable from "../content/message/RoomsTable";

interface IMessageSection {
  theme?: Theme;
  isInRoom?: boolean;
}
const MessageSection = styled.section(
  ({ theme, isInRoom = false }: IMessageSection) => ({
    backdropFilter: theme?.bgColors.backdropFilter,
    backgroundColor: theme?.bgColors.darkgray,
    width: 400,
    height: 550,
    position: "fixed",
    right: 40,
    bottom: 65,
    borderRadius: theme?.borderRadius.lg,
    borderBottomRightRadius: 0,
    padding: theme?.spacing.xl,
    zIndex: 5,
    display: "grid",
    gridTemplateRows: isInRoom ? "5% 85% 10%" : "5% 95%",
    gap: theme?.spacing.sm,
  })
);

interface IMessageTool {}
const MessageTool = ({}: IMessageTool) => {
  const [isMessageToolOpen, setIsMessageToolOpen] = useState(false);

  const [hasNewMessage, setHasNewMessage] = useState(false);
  useEffect(() => {
    const { dispose } = receiveMessage({
      setHasNewMessage,
    });
    return () => {
      dispose();
    };
  }, []);
  const { rooms } = useGetRooms();
  const { users } = useGetSpeakableUsers();

  const [clickedRoomId, setClickedRoomId] = useState("");
  const [clickedUserId, setClickedUserId] = useState("");

  // true면 users 리스트, false면 rooms 리스트
  const [isUsersList, setIsUsersList] = useState(true);

  return (
    <>
      <div
        style={{
          cursor: "pointer",
          position: "fixed",
          right: 20,
          bottom: 20,
        }}
      >
        <CircleIconButton
          bgColor={theme.bgColors.purple}
          onClick={() => {
            setIsMessageToolOpen((prev) => !prev);
            setHasNewMessage(false);
          }}
          color={theme.colors.white}
          size="1x"
          icon={faMessage}
        />
        {hasNewMessage && (
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: theme.bgColors.red,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: 12,
              height: 12,
              zIndex: 5,
            }}
          />
        )}
      </div>
      {isMessageToolOpen && (
        <MessageSection isInRoom={Boolean(clickedRoomId || clickedUserId)}>
          {clickedRoomId || clickedUserId ? (
            <Suspense fallback={<Loading />}>
              <MessagesTable
                clickedRoomId={clickedRoomId}
                clickedUserId={clickedUserId}
                setClickedRoomId={setClickedRoomId}
                setClickedUserId={setClickedUserId}
                setHasNewMessage={setHasNewMessage}
              />
            </Suspense>
          ) : (
            <>
              <RowBox
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SubTitle>{isUsersList ? "유저 목록" : "대화 목록"}</SubTitle>
                <IconButton
                  icon={faRotate}
                  onClick={() => setIsUsersList((prev) => !prev)}
                  size="lg"
                />
              </RowBox>
              {isUsersList ? (
                <SpeakableUsersTable
                  users={users}
                  setClickedUserId={setClickedUserId}
                />
              ) : (
                <RoomsTable rooms={rooms} setClickedRoomId={setClickedRoomId} />
              )}
            </>
          )}
        </MessageSection>
      )}
    </>
  );
};

export default MessageTool;
