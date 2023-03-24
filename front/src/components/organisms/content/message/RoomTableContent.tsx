import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { getKoreanTimeFormat } from "../../../../utils/time/time";
import { ColumnBox, RowBox } from "../../../atomics/boxes/Boxes";
import { ListItem } from "../../../atomics/sections/sections";
import { MainText, SubText } from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { BoxIcon } from "../../../molecules/icons/BoxIcon";
import { RoomTableContent_room$key } from "./__generated__/RoomTableContent_room.graphql";
interface IRoomTableContent {
  room: RoomTableContent_room$key;
  setClickedRoomId: Dispatch<SetStateAction<string>>;
}
const roomTableContentFragment = graphql`
  fragment RoomTableContent_room on Room {
    id
    users {
      id
      name
    }
    unreadMessageCount
    recentMessage {
      id
      message
      createdAt
    }
  }
`;

const RoomTableContent = ({ room, setClickedRoomId }: IRoomTableContent) => {
  const { users, id, unreadMessageCount, recentMessage } = useFragment(
    roomTableContentFragment,
    room
  );

  const recentMessageCreatedAt = getKoreanTimeFormat(recentMessage?.createdAt);

  return (
    <ListItem
      style={{
        cursor: "pointer",
      }}
      onClick={() => setClickedRoomId(id)}
    >
      <RowBox>
        <BoxIcon icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <ColumnBox gap={theme.spacing.xs}>
          <RowBox style={{ justifyContent: "space-between" }}>
            {users.map((user) => (
              <SubTitle key={user.id}>{user.name}</SubTitle>
            ))}
            {unreadMessageCount > 0 && (
              <div
                style={{
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
                <SubText style={{ fontSize: theme.fonts.xs }}>
                  {unreadMessageCount}
                </SubText>
              </div>
            )}
          </RowBox>
          <RowBox
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <MainText className="one-line" style={{ wordBreak: "break-all" }}>
              {recentMessage?.message}
            </MainText>
            <SubText
              style={{
                fontSize: theme.fonts.xs,
                whiteSpace: "nowrap",
              }}
            >
              {recentMessageCreatedAt}
            </SubText>
          </RowBox>
        </ColumnBox>
      </RowBox>
    </ListItem>
  );
};

export default React.memo(RoomTableContent);
