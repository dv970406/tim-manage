import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import {
  getElaspedDay,
  getKoreanTimeFormat,
} from "../../../../utils/time/time";
import { ColumnBox, GapBox, RowBox } from "../../../atomics/boxes/Boxes";
import { MainText, SubText } from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { MessageTableContent_message$key } from "./__generated__/MessageTableContent_message.graphql";

interface IMessageTableContent {
  message: MessageTableContent_message$key;
}
const messageTableContentFragment = graphql`
  fragment MessageTableContent_message on Message {
    id
    message
    user {
      id
      name
    }
    createdAt
    isMine
  }
`;

const MessageTableContent = ({ message }: IMessageTableContent) => {
  const {
    message: messageContent,
    createdAt,
    user,
    isMine,
  } = useFragment(messageTableContentFragment, message);

  const messageCreatedAt = getKoreanTimeFormat(createdAt);

  return (
    <GapBox style={{ flexDirection: isMine ? "row-reverse" : "row" }}>
      <div>
        <SubTitle>{user.name}</SubTitle>
        <RowBox
          style={{
            background: theme.bgColors.sectionGradient,
            backdropFilter: theme.bgColors.backdropFilter,
            padding: theme.spacing.md,
            width: "auto",
            borderRadius: theme.borderRadius.sm,
            ...(isMine && { borderTopRightRadius: 0 }),
            ...(!isMine && { borderTopLeftRadius: 0 }),
          }}
        >
          <MainText>{messageContent}</MainText>
        </RowBox>
        <SubText style={{ fontSize: 10, textAlign: isMine ? "right" : "left" }}>
          {messageCreatedAt}
        </SubText>
      </div>
    </GapBox>
  );
};

export default React.memo(MessageTableContent);
