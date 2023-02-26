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
import { RowBox } from "../../../atomics/boxes/Boxes";
import { ListItem } from "../../../atomics/sections/sections";
import { SubTitle } from "../../../atomics/typographys/titles";
import { BoxIcon } from "../../../molecules/icons/Icons";
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
    unreadCount
  }
`;

const RoomTableContent = ({ room, setClickedRoomId }: IRoomTableContent) => {
  const { users, id, unreadCount } = useFragment(
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

        {users.map((user) => (
          <SubTitle key={user.id}>{user.name}</SubTitle>
        ))}
      </RowBox>
    </ListItem>
  );
};

export default React.memo(RoomTableContent);
