import {
  faBox,
  faComment,
  faHeart,
  faEllipsisVertical,
  faRocket,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useFragment, usePaginationFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { getElaspedDay } from "../../../../utils/time/time";
import { ColumnBox, RowBox } from "../../../atomics/boxes/Boxes";
import { ListItem } from "../../../atomics/sections/sections";
import { MainText, SubText } from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { BoxIcon } from "../../../molecules/icons/Icons";
import { RoomTableContent_room$key } from "./__generated__/RoomTableContent_room.graphql";
import "./RoomTableContent.css";
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
    }
  }
`;

const RoomTableContent = ({ room, setClickedRoomId }: IRoomTableContent) => {
  const { users, id, unreadMessageCount, recentMessage } = useFragment(
    roomTableContentFragment,
    room
  );

  return (
    <ListItem
      style={{
        cursor: "pointer",
      }}
      onClick={() => setClickedRoomId(id)}
    >
      <RowBox>
        <BoxIcon icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <RowBox
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <ColumnBox gap={theme.spacing.sm}>
            {users.map((user) => (
              <SubTitle key={user.id}>{user.name}</SubTitle>
            ))}
            <MainText>{recentMessage?.message}</MainText>
          </ColumnBox>
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
              <SubText style={{ fontSize: 10 }}>{unreadMessageCount}</SubText>
            </div>
          )}
        </RowBox>
      </RowBox>
    </ListItem>
  );
};

export default React.memo(RoomTableContent);
