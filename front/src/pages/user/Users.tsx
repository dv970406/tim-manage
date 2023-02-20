import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { getUsersQuery, useGetUsers } from "../../client/user/GetUsers.client";
import { GetUsersQuery } from "../../client/user/__generated__/GetUsersQuery.graphql";
import { GapBox, RowBox } from "../../components/atomics/boxes/Boxes";
import UsersTable from "../../components/templates/content/user/UsersTable";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const UsersPage = () => {
  const [getUsersQueryReference, loadUsersQuery] =
    useQueryLoader<GetUsersQuery>(getUsersQuery);

  useEffect(() => {
    loadUsersQuery({ first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback="Users loading">
      {getUsersQueryReference && (
        <Users getUsersQueryReference={getUsersQueryReference} />
      )}
    </Suspense>
  );
};

interface IUsers {
  getUsersQueryReference: PreloadedQuery<GetUsersQuery>;
}
const Users = ({ getUsersQueryReference }: IUsers) => {
  const { users } = useGetUsers(getUsersQueryReference);
  // const { searchUsers, setKeyword } = useSearchUsers();

  // const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (event) =>
  //   setKeyword(event.currentTarget.value);

  // console.log("searchUsers:", searchUsers);
  if (!users) return <></>;

  return <GapBox>{users && <UsersTable users={users} />}</GapBox>;
};

export default UsersPage;
