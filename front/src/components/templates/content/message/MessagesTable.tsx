import { graphql } from "babel-plugin-relay/macro";
import React, { useEffect } from "react";
import { usePaginationFragment } from "react-relay";
import { useGetRoom } from "../../../../client/message/GetRoom.client";
import { receiveInRoom } from "../../../../client/message/ReceiveInRoom.client";
import { ColumnBox, GapBox } from "../../../atomics/boxes/Boxes";
import { SubTitle } from "../../../atomics/typographys/titles";
import MessageTableContent from "../../../organisms/content/message/MessageTableContent";
import SendMessage from "../../../organisms/content/message/SendMessage";
import { InfiniteScrollList } from "../../../organisms/shared/InfiniteScrolls";
import { MessagesTablePaginationQuery } from "./__generated__/MessagesTablePaginationQuery.graphql";
import { MessagesTable_message$key } from "./__generated__/MessagesTable_message.graphql";

interface IMessagesTable {
  roomId: string;
}
const getMessagesFragment = graphql`
  fragment MessagesTable_message on Room
  @refetchable(queryName: "MessagesTablePaginationQuery") {
    messagesOfRoomConnection(first: $first, after: $after)
      @connection(key: "MessagesTable_messagesOfRoomConnection") {
      edges {
        node {
          ...MessageTableContent_message
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const MessagesTable = ({ roomId }: IMessagesTable) => {
  const { room } = useGetRoom(roomId);
  const {
    data: {
      messagesOfRoomConnection: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment<
    MessagesTablePaginationQuery,
    MessagesTable_message$key
  >(getMessagesFragment, room!);

  useEffect(() => {
    const { dispose } = receiveInRoom(roomId);
    return () => dispose();
  }, []);
  return (
    <ColumnBox>
      <SubTitle>{room?.users.map((user) => user.name)}님과의 대화</SubTitle>
      <InfiniteScrollList
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        direction="reverse"
      >
        {edges?.map(
          (message) =>
            message?.node && (
              <MessageTableContent
                key={message.cursor}
                message={message.node}
              />
            )
        )}
      </InfiniteScrollList>
      <GapBox>
        <SendMessage roomId={room?.id} />
      </GapBox>
    </ColumnBox>
  );
};

export default MessagesTable;
