import { faMessage } from "@fortawesome/pro-solid-svg-icons";
import React, { useState } from "react";
import { useGetRoom } from "../../client/message/GetRoom.client";
import { useGetRooms } from "../../client/message/GetRooms.client";
import { useSubscriptionRoom } from "../../client/message/SubscriptionRoom.client";
import { theme } from "../../css/theme";
import { GapBox } from "../atomics/boxes/Boxes";
import { MessageSection } from "../atomics/sections/sections";
import { MainTitle, SubTitle } from "../atomics/typographys/titles";
import { ButtonIcon, CircleButton } from "../molecules/buttons/Buttons";
import RoomsTable from "./content/message/RoomsTable";

const MessageTool = () => {
  const [isMessageToolOpen, setIsMessageToolOpen] = useState(false);

  const [clickedRoomId, setClickedRoomId] = useState("");
  const { rooms } = useGetRooms();

  const { room } = useGetRoom(clickedRoomId);

  // useSubscriptionRoom(clickedRoomId);

  return (
    <>
      {isMessageToolOpen && (
        <MessageSection>
          <SubTitle>대화 목록</SubTitle>
          <RoomsTable rooms={rooms} setClickedRoomId={setClickedRoomId} />
        </MessageSection>
      )}
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
          onClick={() => setIsMessageToolOpen((prev) => !prev)}
          color={theme.colors.white}
          size="1x"
          icon={faMessage}
        />
      </div>
    </>
  );
};

export default MessageTool;
