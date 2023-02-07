import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerUsersQuery } from "./__generated__/GetManagerUsersQuery.graphql";

export const getManagerUsersQuery = graphql`
  query GetManagerUsersQuery {
    getUsers {
      ok
      error
      users {
        ...ManagerUserTableContent_user
      }
    }
  }
`;

export const useGetManagerUsers = (
  managerUsersQueryReference: PreloadedQuery<GetManagerUsersQuery>
) => {
  const {
    getUsers: { ok, error, users },
  } = usePreloadedQuery<GetManagerUsersQuery>(
    getManagerUsersQuery,
    managerUsersQueryReference
  );
  if (!ok) {
    alert(error);
  }

  return { users };
};
