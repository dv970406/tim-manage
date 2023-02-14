import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../client";
import { GetMyAllInfoQuery } from "./__generated__/GetMyAllInfoQuery.graphql";
import { GetMyInfoQuery } from "./__generated__/GetMyInfoQuery.graphql";

export const getMyAllInfoQuery = graphql`
  query GetMyAllInfoQuery {
    getMyInfo {
      ok
      error
      user {
        ...ShowUserInfo_user
        ...ShowUserPosts_post
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
