import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { getUsersQuery, useGetUsers } from "../../client/user/GetUsers.client";
import { GetUsersQuery } from "../../client/user/__generated__/GetUsersQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/boxes/Sections";
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
    <>
      <Section noneBg>{users && <UsersTable users={users} />}</Section>
    </>
  );
};

export default UsersPage;
