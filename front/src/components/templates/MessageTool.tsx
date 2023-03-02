import { faMessage } from "@fortawesome/pro-solid-svg-icons";
import React, { Suspense, useEffect, useState } from "react";
import { useGetRooms } from "../../client/message/GetRooms.client";
import { receiveMessage } from "../../client/message/ReceiveMessage.client";
import { theme } from "../../css/theme";
import Loading from "../atomics/boxes/Loading";
import { MessageSection } from "../atomics/sections/sections";
import { SubTitle } from "../atomics/typographys/titles";
import { CircleButton } from "../molecules/buttons/Buttons";
import MessagesTable from "./content/message/MessagesTable";
import Room from "./content/message/MessagesTable";
import RoomsTable from "./content/message/RoomsTable";
import UsersTable from "./content/user/UsersTable";

interface IMessageTool {
  unreadMessageCount?: number;
}
const MessageTool = ({ unreadMessageCount }: IMessageTool) => {
  const [isMessageToolOpen, setIsMessageToolOpen] = useState(false);

  const [hasNews, setHasNews] = useState(false);
  useEffect(() => {
    const { dispose } = receiveMessage({
      setHasNews,
    });
    return () => {
      dispose();
    };
  }, []);
  const { rooms } = useGetRooms();

  const [clickedRoomId, setClickedRoomId] = useState("");

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
            setHasNews(false);
          }}
          color={theme.colors.white}
          size="1x"
          icon={faMessage}
        />
        {(hasNews || !!unreadMessageCount) && (
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
            {unreadMessageCount}
          </div>
        )}
        {isMessageToolOpen && (
          <MessageSection>
            {clickedRoomId ? (
              <Suspense fallback={<Loading />}>
                <MessagesTable roomId={clickedRoomId} />
              </Suspense>
            ) : (
              <>
                <RoomsTable rooms={rooms} setClickedRoomId={setClickedRoomId} />
              </>
            )}
          </MessageSection>
        )}
      </div>
    </>
  );
};

export default MessageTool;
