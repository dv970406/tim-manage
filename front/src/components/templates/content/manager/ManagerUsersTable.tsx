import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { usePaginationFragment } from "react-relay";
import { InfiniteScrollDataTable } from "../../../organisms/shared/InfiniteScrolls";
import Table from "../../../molecules/tables/Table";
import ManagerUserTableContent from "../../../organisms/content/manager/ManagerUserTableContent";
import { GetManagerUsersPaginationQuery } from "./__generated__/GetManagerUsersPaginationQuery.graphql";
import { ManagerUsersTable_user$key } from "./__generated__/ManagerUsersTable_user.graphql";
import { ScrollBox } from "../../../atomics/boxes/Boxes";
import { ManagerUsersTablePaginationQuery } from "./__generated__/ManagerUsersTablePaginationQuery.graphql";

interface IManagerUsersTable {
  clickedUserId: string;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  myPosition?: string;
  users: ManagerUsersTable_user$key;
}

const getManagerUsersFragment = graphql`
  fragment ManagerUsersTable_user on Query
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "ManagerUsersTablePaginationQuery") {
    getUsers(first: $first, after: $after)
      @connection(key: "ManagerUsersTable_getUsers") {
      ok
      error
      edges {
        node {
          ...ManagerUserTableContent_user
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

const ManagerUsersTable = ({
  users,
  clickedUserId,
  setClickedUserId,
  myPosition,
}: IManagerUsersTable) => {
  const {
    data: {
      getUsers: { edges },
    },
    loadNext,
    isLoadingNext,
    refetch,
    hasNext,
  } = usePaginationFragment<
    ManagerUsersTablePaginationQuery,
    ManagerUsersTable_user$key
  >(getManagerUsersFragment, users);

  return (
    <ScrollBox>
      <InfiniteScrollDataTable
        headers={["이름", "직책", "팀"]}
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
      >
        {edges.map(
          (user) =>
            user && (
              <ManagerUserTableContent
                key={user.cursor}
                user={user.node}
                clickedUserId={clickedUserId}
                setClickedUserId={setClickedUserId}
                myPosition={myPosition}
              />
            )
        )}
      </InfiniteScrollDataTable>
    </ScrollBox>
  );
};

export default ManagerUsersTable;
