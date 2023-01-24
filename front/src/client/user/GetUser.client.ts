import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
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

export const useGetUser = (
  getUserQueryReference: PreloadedQuery<GetUserQuery>
) => {
  const {
    getUser: { user },
  } = usePreloadedQuery<GetUserQuery>(getUserQuery, getUserQueryReference);
  // const {
  //   getUser: { ok, error, user },
  // } = useLazyLoadQuery<GetUserQuery>(getUserQuery, {
  //   id: userId,
  // });

  return { user };
};
