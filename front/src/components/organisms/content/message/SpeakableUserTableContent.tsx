import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { ListItem } from "../../../atomics/sections/sections";
import { SubTitle } from "../../../atomics/typographys/titles";
import { IconBox } from "../../../molecules/boxes/IconBox";
import { SpeakableUserTableContent_user$key } from "./__generated__/SpeakableUserTableContent_user.graphql";

interface ISpeakableUserTableContent {
  user: SpeakableUserTableContent_user$key;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  myId?: string;
}
const speakableUserTableContentFragment = graphql`
  fragment SpeakableUserTableContent_user on User {
    id
    name
  }
`;

const SpeakableUserTableContent = ({
  user,
  setClickedUserId,
  myId,
}: ISpeakableUserTableContent) => {
  const { id, name } = useFragment(speakableUserTableContentFragment, user);
  // 나 자신은 보여주면 안됨
  if (myId === id) return <></>;
  return (
    <ListItem
      style={{
        cursor: "pointer",
      }}
      onClick={() => setClickedUserId(id)}
    >
      <RowBox>
        <IconBox icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <RowBox
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <ColumnBox>
            <SubTitle>{name}</SubTitle>
          </ColumnBox>
        </RowBox>
      </RowBox>
    </ListItem>
  );
};

export default SpeakableUserTableContent;
