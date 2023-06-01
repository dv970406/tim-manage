import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { getKoreanTimeFormat } from "../../../../utils/func/time";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { MainText } from "../../../atomics/typographys/Main";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
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
    <li>
      <ColumnBox style={{ flexDirection: isMine ? "row-reverse" : "row" }}>
        <ColumnBox gap={theme.spacing.xs} style={{ width: "auto" }}>
          <SubTitle style={{ textAlign: isMine ? "right" : "left" }}>
            {user.name}
          </SubTitle>
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
            <MainText style={{ wordBreak: "break-word" }}>
              {messageContent}
            </MainText>
          </RowBox>
          <SubText
            style={{
              display: "block",
              fontSize: theme.fonts.xs,
              textAlign: isMine ? "right" : "left",
            }}
          >
            {messageCreatedAt}
          </SubText>
        </ColumnBox>
      </ColumnBox>
    </li>
  );
};

export default React.memo(MessageTableContent);
