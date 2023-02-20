import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetMyAllInfoQuery } from "./__generated__/GetMyAllInfoQuery.graphql";

export const getMyAllInfoQuery = graphql`
  query GetMyAllInfoQuery($first: Int!, $after: DateTime) {
    getMyInfo(first: $first, after: $after) {
      ok
      error
      user {
        ...ShowUserInfo_user
        ...ShowUserPosts_post @arguments(first: $first, after: $after)
        ...ShowUserComments_comment @arguments(first: $first, after: $after)
        ...ShowUserLikes_like @arguments(first: $first, after: $after)
        ...ShowUserAnswers_answer @arguments(first: $first, after: $after)
        ...ShowUserVacations_vacation @arguments(first: $first, after: $after)
      }
    }
  }
`;

export const useGetMyAllInfo = (
  getMyAllInfoQueryReference: PreloadedQuery<GetMyAllInfoQuery>
) => {
  const {
    getMyInfo: { ok, error, user },
  } = usePreloadedQuery<GetMyAllInfoQuery>(
    getMyAllInfoQuery,
    getMyAllInfoQueryReference
  );

  if (!ok) alert(error);
  return { myAllInfo: user };
};
