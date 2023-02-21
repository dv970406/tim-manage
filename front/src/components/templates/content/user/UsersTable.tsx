import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";
import { ManageDataList } from "../../../organisms/shared/ManageDataList";
import UserTableContent from "../../../organisms/content/user/UserTableContent";
import { GetUsersPaginationQuery } from "./__generated__/GetUsersPaginationQuery.graphql";
import { UsersTable_user$key } from "./__generated__/UsersTable_user.graphql";

interface IUsersTable {
  users: UsersTable_user$key;
}

const getUsersFragment = graphql`
  fragment UsersTable_user on Query
  @argumentDefinitions(
    keyword: { type: "String" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "UsersTablePaginationQuery") {
    getUsers(keyword: $keyword, first: $first, after: $after)
      @connection(key: "UsersTable_getUsers") {
      ok
      error
      edges {
        node {
          ...UserTableContent_user
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

const UsersTable = ({ users }: IUsersTable) => {
  const { myInfo } = useGetMyInfo();

  const {
    data: {
      getUsers: { edges },
    },
    loadNext,
    isLoadingNext,
    refetch,
    hasNext,
  } = usePaginationFragment<GetUsersPaginationQuery, UsersTable_user$key>(
    getUsersFragment,
    users
  );

  return (
    <>
      <ManageDataList
        dataTableName="create-user"
        refetch={refetch}
        isLoadingNext={isLoadingNext}
        loadNext={loadNext}
        hasNext={hasNext}
      >
        {edges.map(
          (user) =>
            user.node && (
              <UserTableContent
                key={user.cursor}
                user={user.node}
                isManager={myInfo?.isManager}
              />
            )
        )}
      </ManageDataList>
    </>
  );
};

export default UsersTable;
