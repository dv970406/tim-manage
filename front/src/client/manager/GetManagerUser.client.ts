import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetManagerUserQuery } from "./__generated__/GetManagerUserQuery.graphql";

export const getManagerUserQuery = graphql`
  query GetManagerUserQuery($id: ID!, $skip: Boolean!) {
    getUser(input: { id: $id }) @skip(if: $skip) {
      ok
      error
      user {
        id
        name
        email
        isManager
        joinDate
        position {
          id
          position
        }
        team {
          id
          team
        }
        availableVacation
      }
    }
  }
`;

export const useGetManagerUser = (userId: string) => {
  const { getUser } = useLazyLoadQuery<GetManagerUserQuery>(
    getManagerUserQuery,
    {
      skip: !userId,
      id: userId,
    }
  );

  if (userId && !getUser?.ok) {
    alert(getUser?.error);
  }

  return { user: getUser?.user };
};
