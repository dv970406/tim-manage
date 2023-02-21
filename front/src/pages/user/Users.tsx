import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { getUsersQuery, useGetUsers } from "../../client/user/GetUsers.client";
import { GetUsersQuery } from "../../client/user/__generated__/GetUsersQuery.graphql";
import { GapBox, RowBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import CreateUserModal from "../../components/templates/content/user/CreateUserModal";
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

  return (
    /* Section이 있어야 Observer가 제대로 동작해서 Infinite Scroll이 정상 작동함 */
    <Section noneBg>
      {users && <UsersTable users={users} />}
      <CreateUserModal />
    </Section>
  );
};

export default UsersPage;
