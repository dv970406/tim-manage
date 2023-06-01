import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { getKoreanTimeFormat } from "../../../../utils/func/time";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { ListItem } from "../../../atomics/boxes/ScrollBox";
import { MainText } from "../../../atomics/typographys/Main";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
import { IconBox } from "../../../molecules/boxes/IconBox";
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
  const {
    users,
    id: roomId,
    unreadMessageCount,
    recentMessage,
  } = useFragment(roomTableContentFragment, room);

  const recentMessageCreatedAt = getKoreanTimeFormat(recentMessage?.createdAt);

  return (
    <ListItem
      style={{
        cursor: "pointer",
      }}
      onClick={() => setClickedRoomId(roomId)}
    >
      <RowBox>
        <IconBox icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <ColumnBox gap={theme.spacing.xs} style={{ width: "100%" }}>
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
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
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
