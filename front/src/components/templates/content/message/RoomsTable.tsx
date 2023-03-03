import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { usePaginationFragment } from "react-relay";
import { SubTitle } from "../../../atomics/typographys/titles";
import RoomTableContent from "../../../organisms/content/message/RoomTableContent";
import { InfiniteScrollList } from "../../../organisms/shared/InfiniteScrolls";
import { RoomsTablePaginationQuery } from "./__generated__/RoomsTablePaginationQuery.graphql";
import { RoomsTable_room$key } from "./__generated__/RoomsTable_room.graphql";

interface IRoomsTable {
  rooms: RoomsTable_room$key;
  setClickedRoomId: Dispatch<SetStateAction<string>>;
}

const getRoomsFragment = graphql`
  fragment RoomsTable_room on Query
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "RoomsTablePaginationQuery") {
    getRooms(first: $first, after: $after)
      @connection(key: "RoomsTable_getRooms") {
      ok
      error
      edges {
        node {
          ...RoomTableContent_room
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

const RoomsTable = ({ rooms, setClickedRoomId }: IRoomsTable) => {
  const {
    data: { getRooms },
    loadNext,
    isLoadingNext,
    refetch,
    hasNext,
  } = usePaginationFragment<RoomsTablePaginationQuery, RoomsTable_room$key>(
    getRoomsFragment,
    rooms
  );

  return (
    <>
      <SubTitle>대화 목록</SubTitle>

      <InfiniteScrollList
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
      >
        {getRooms?.edges?.map(
          (room) =>
            room && (
              <RoomTableContent
                key={room.cursor}
                room={room.node}
                setClickedRoomId={setClickedRoomId}
              />
            )
        )}
      </InfiniteScrollList>
    </>
  );
};

export default RoomsTable;
