import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { getUsersQuery, useGetUsers } from "../../client/user/GetUsers.client";
import { GetUsersQuery } from "../../client/user/__generated__/GetUsersQuery.graphql";
import Loading from "../../components/atomics/boxes/Loading";
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
    <Suspense fallback={<Loading />}>
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
