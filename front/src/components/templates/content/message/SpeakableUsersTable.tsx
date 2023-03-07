import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { usePaginationFragment } from "react-relay";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";
import { SubTitle } from "../../../atomics/typographys/titles";
import SpeakableUserTableContent from "../../../organisms/content/message/SpeakableUserTableContent";
import {
  InfiniteScrollList,
  SearchAndInfiniteScrollDataList,
} from "../../../organisms/shared/InfiniteScrolls";
import { SpeakableUsersPaginationQuery } from "./__generated__/SpeakableUsersPaginationQuery.graphql";
import { SpeakableUsersTable_user$key } from "./__generated__/SpeakableUsersTable_user.graphql";
interface ISpeakableUsersTable {
  users: SpeakableUsersTable_user$key;
  setClickedUserId: Dispatch<SetStateAction<string>>;
}

const getSpeakableUsersFragment = graphql`
  fragment SpeakableUsersTable_user on Query
  @argumentDefinitions(
    keyword: { type: "String" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "SpeakableUsersPaginationQuery") {
    getUsers(keyword: $keyword, first: $first, after: $after)
      @connection(key: "SpeakableUsers_getUsers") {
      ok
      error
      edges {
        node {
          ...SpeakableUserTableContent_user
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
const SpeakableUsersTable = ({
  users,
  setClickedUserId,
}: ISpeakableUsersTable) => {
  const {
    data: {
      getUsers: { edges },
    },
    loadNext,
    isLoadingNext,
    refetch,
    hasNext,
  } = usePaginationFragment<
    SpeakableUsersPaginationQuery,
    SpeakableUsersTable_user$key
  >(getSpeakableUsersFragment, users);

  const { myInfo } = useGetMyInfo();
  return (
    <>
      <SearchAndInfiniteScrollDataList
        mutateName=""
        refetch={refetch}
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
        noGrid
        hasAddButton={false}
      >
        {edges?.map(
          (user) =>
            user && (
              <SpeakableUserTableContent
                key={user.cursor}
                user={user.node}
                setClickedUserId={setClickedUserId}
                myId={myInfo?.id}
              />
            )
        )}
      </SearchAndInfiniteScrollDataList>
    </>
  );
};

export default SpeakableUsersTable;
