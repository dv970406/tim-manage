import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetMyAllInfoQuery } from "./__generated__/GetMyAllInfoQuery.graphql";

export const getMyAllInfoQuery = graphql`
  query GetMyAllInfoQuery($keyword: String, $first: Int!, $after: DateTime) {
    getMyInfo {
      ok
      error
      user {
        ...ShowUserInfo_user
        ...ShowUserPosts_post
        ...ShowUserComments_comment
        ...ShowUserLikes_like
        ...ShowUserAnswers_answer
        ...ShowUserVacations_vacation
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
