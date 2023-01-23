import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetUsersQuery } from "./__generated__/GetUsersQuery.graphql";

const getUsersQuery = graphql`
  query GetUsersQuery {
    getUsers {
      ok
      error
      users {
        id
        name
        email
      }
    }
  }
`;

export const useGetUsers = () => {
  const { getUsers } = useLazyLoadQuery<GetUsersQuery>(getUsersQuery, {});
  return { getUsers };
};
