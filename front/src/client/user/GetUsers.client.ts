import { graphql } from "babel-plugin-relay/macro";
import {
  loadQuery,
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetUsersQuery } from "./__generated__/GetUsersQuery.graphql";

export const getUsersQuery = graphql`
  query GetUsersQuery {
    getUsers {
      ok
      error
      users {
        ...UserTableContent_user
      }
    }
  }
`;

export const useGetUsers = (
  usersQueryReference: PreloadedQuery<GetUsersQuery>
) => {
  const {
    getUsers: { ok, error, users },
  } = usePreloadedQuery<GetUsersQuery>(getUsersQuery, usersQueryReference);
  if (!ok) {
    alert(error);
  }

  return { users };
};
