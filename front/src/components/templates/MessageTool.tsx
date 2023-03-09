import { faMessage, faRotate } from "@fortawesome/pro-solid-svg-icons";
import React, { Suspense, useEffect, useState } from "react";
import { useGetRooms } from "../../client/message/GetRooms.client";
import { receiveMessage } from "../../client/message/ReceiveMessage.client";
import { useGetSpeakableUsers } from "../../client/user/GetSpeakableUsers.client";
import { theme } from "../../css/theme";
import { ColumnBox, RowBox } from "../atomics/boxes/Boxes";
import Loading from "../atomics/boxes/Loading";
import { MessageSection } from "../atomics/sections/sections";
import { SubTitle } from "../atomics/typographys/titles";
import { ButtonIcon, CircleButton } from "../molecules/buttons/Buttons";
import MessagesTable from "./content/message/MessagesTable";
import RoomsTable from "./content/message/RoomsTable";
import SpeakableUsersTable from "./content/message/SpeakableUsersTable";

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
        <CircleButton
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
                <ButtonIcon
                  icon={faRotate}
                  onClick={() => setIsUsersList((prev) => !prev)}
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
