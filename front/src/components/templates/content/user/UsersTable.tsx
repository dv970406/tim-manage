import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";
import { SearchAndInfiniteScrollList } from "../../../organisms/scrolls/SearchAndInfiniteScrollList";
import UserTableContent from "../../../organisms/content/user/UserTableContent";
import { UsersTable_user$key } from "./__generated__/UsersTable_user.graphql";
import OrderUsers from "../../../organisms/content/user/OrderUsers";
import { UsersTablePaginationQuery } from "./__generated__/UsersTablePaginationQuery.graphql";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import CreateUserModal from "../manager/CreateUserModal";
import { useState } from "react";
interface IUsersTable {
  users: UsersTable_user$key;
}

const getUsersFragment = graphql`
  fragment UsersTable_user on Query
  @argumentDefinitions(
    keyword: { type: "String" }
    orders: { type: "Orders" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "UsersTablePaginationQuery") {
    getUsers(keyword: $keyword, orders: $orders, first: $first, after: $after)
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
  } = usePaginationFragment<UsersTablePaginationQuery, UsersTable_user$key>(
    getUsersFragment,
    users
  );
  const [createUserModal, setCreateUserModal] = useState(false);

  return (
    <>
      <ColumnBox>
        <OrderUsers refetch={refetch} />
        <SearchAndInfiniteScrollList
          {...(myInfo?.isManager && {
            openModal: () => setCreateUserModal(true),
          })}
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
        </SearchAndInfiniteScrollList>
      </ColumnBox>
      {createUserModal && (
        <CreateUserModal onClose={() => setCreateUserModal(false)} />
      )}
    </>
  );
};

export default UsersTable;
