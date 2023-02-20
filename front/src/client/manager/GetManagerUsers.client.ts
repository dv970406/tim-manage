import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerUsersQuery } from "./__generated__/GetManagerUsersQuery.graphql";

export const getManagerUsersQuery = graphql`
  query GetManagerUsersQuery($first: Int!, $after: DateTime) {
    ...ManagerUsersTable_user @arguments(first: $first, after: $after)
  }
`;

export const useGetManagerUsers = (
  managerUsersQueryReference: PreloadedQuery<GetManagerUsersQuery>
) => {
  const users = usePreloadedQuery<GetManagerUsersQuery>(
    getManagerUsersQuery,
    managerUsersQueryReference
  );

  return {
    users,
  };
};
