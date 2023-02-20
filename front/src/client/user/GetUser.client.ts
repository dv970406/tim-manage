import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetUserQuery } from "./__generated__/GetUserQuery.graphql";

export const getUserQuery = graphql`
  query GetUserQuery($userId: ID!) {
    getUser(userId: $userId) {
      ok
      error
      user {
        ...ShowUserInfo_user
      }
      # ...ShowUserVacations_vacation
    }
  }
`;

export const useGetUser = (
  getUserQueryReference: PreloadedQuery<GetUserQuery>
) => {
  const {
    getUser: { ok, error, user },
  } = usePreloadedQuery<GetUserQuery>(getUserQuery, getUserQueryReference);

  if (!ok) {
    alert(error);
  }

  return { user };
};
