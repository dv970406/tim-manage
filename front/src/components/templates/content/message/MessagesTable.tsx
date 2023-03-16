import { faDoorOpen } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { usePaginationFragment } from "react-relay";
import { useGetOrCreateRoom } from "../../../../client/message/GetOrCreateRoom.client";
import { receiveInRoom } from "../../../../client/message/ReceiveInRoom.client";
import { ColumnBox, RowBox } from "../../../atomics/boxes/Boxes";
import { SubTitle } from "../../../atomics/typographys/titles";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import MessageTableContent from "../../../organisms/content/message/MessageTableContent";
import SendMessage from "../../../organisms/content/message/SendMessage";
import { InfiniteScrollList } from "../../../organisms/shared/InfiniteScrolls";
import { MessagesTablePaginationQuery } from "./__generated__/MessagesTablePaginationQuery.graphql";
import { MessagesTable_message$key } from "./__generated__/MessagesTable_message.graphql";

interface IMessagesTable {
  clickedRoomId: string;
  clickedUserId: string;
  setClickedRoomId: Dispatch<SetStateAction<string>>;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  setHasNewMessage: Dispatch<SetStateAction<boolean>>;
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

const MessagesTable = ({
  clickedRoomId,
  clickedUserId,
  setClickedRoomId,
  setClickedUserId,
  setHasNewMessage,
}: IMessagesTable) => {
  const { room } = useGetOrCreateRoom({
    roomId: clickedRoomId,
    userId: clickedUserId,
    setHasNewMessage,
  });

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
    if (!room?.id) return;
    const { dispose } = receiveInRoom({
      roomId: room.id,
      setHasNewMessage,
    });
    return () => dispose();
  }, [room?.id]);

  const handleGetOutRoom = () => {
    setClickedRoomId("");
    setClickedUserId("");
  };

  return (
    <>
      <RowBox style={{ justifyContent: "space-between", alignItems: "center" }}>
        <SubTitle>{room?.users.map((user) => user.name)}님과의 대화</SubTitle>
        <ButtonIcon icon={faDoorOpen} onClick={handleGetOutRoom} />
      </RowBox>
      <InfiniteScrollList
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        direction="reverse"
      >
        {edges?.map(
          (message) =>
            message.cursor && (
              <MessageTableContent
                key={message.cursor}
                message={message.node}
              />
            )
        )}
      </InfiniteScrollList>

      <SendMessage roomId={room?.id} />
    </>
  );
};

export default MessagesTable;
