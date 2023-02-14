import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { getUsersQuery, useGetUsers } from "../../client/user/GetUsers.client";
import { GetUsersQuery } from "../../client/user/__generated__/GetUsersQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import UsersTable from "../../components/templates/content/user/UsersTable";

const UsersPage = () => {
  const [usersQueryReference, loadUsersQuery] =
    useQueryLoader<GetUsersQuery>(getUsersQuery);

  useEffect(() => {
    loadUsersQuery({});
  }, []);
  return (
    <Suspense fallback="Users loading">
      {usersQueryReference && (
        <Users usersQueryReference={usersQueryReference} />
      )}
    </Suspense>
  );
};

interface IUsers {
  usersQueryReference: PreloadedQuery<GetUsersQuery>;
}
const Users = ({ usersQueryReference }: IUsers) => {
  const { users } = useGetUsers(usersQueryReference);

  if (!users) return <></>;
  return <Section noneBg>{users && <UsersTable users={users} />}</Section>;
};

export default UsersPage;
