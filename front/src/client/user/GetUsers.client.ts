import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetUsersQuery } from "./__generated__/GetUsersQuery.graphql";

export const getUsersQuery = graphql`
  query GetUsersQuery(
    $keyword: String
    $orders: Orders
    $first: Int!
    $after: DateTime
  ) {
    ...UsersTable_user
      @arguments(
        keyword: $keyword
        orders: $orders
        first: $first
        after: $after
      )
  }
`;

export const useGetUsers = (
  usersQueryReference: PreloadedQuery<GetUsersQuery>
) => {
  const users = usePreloadedQuery<GetUsersQuery>(
    getUsersQuery,
    usersQueryReference
  );

  return { users };
};
