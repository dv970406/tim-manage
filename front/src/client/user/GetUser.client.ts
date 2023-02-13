import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetUserQuery } from "./__generated__/GetUserQuery.graphql";

export const getUserQuery = graphql`
  query GetUserQuery($id: ID!) {
    getUser(input: { id: $id }) {
      ok
      error
      user {
        id
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
        isManager
        name
        availableVacation
        vacations {
          id
        }

        ...ShowUserPosts_post
        ...ShowUserSurveys_survey
      }
    }
  }
`;

export const useGetUser = (
  getUserQueryReference: PreloadedQuery<GetUserQuery>
) => {
  const {
    getUser: { ok, error, user },
  } = usePreloadedQuery<GetUserQuery>(getUserQuery, getUserQueryReference);
  // const {
  //   getUser: { ok, error, user },
  // } = useLazyLoadQuery<GetUserQuery>(getUserQuery, {
  //   id: userId,
  // });

  if (!ok) {
    alert(error);
  }

  return { user };
};
