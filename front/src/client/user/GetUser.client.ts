import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import { useLazyLoadQuery } from "react-relay";
import { GetUserQuery } from "./__generated__/GetUserQuery.graphql";

export const getUserQuery = graphql`
  query GetUserQuery($id: ID!) {
    getUser(input: { id: $id }) {
      ok
      error
      user {
        id
        name
        email
        ...UserList_user
      }
    }
  }
`;

export const useGetUser = (userId: string) => {
  const {
    getUser: { ok, error, user },
  } = useLazyLoadQuery<GetUserQuery>(getUserQuery, {
    id: userId,
  });

  useEffect(() => {
    if (!ok) alert(error);
  }, [ok]);

  return { user };
};
