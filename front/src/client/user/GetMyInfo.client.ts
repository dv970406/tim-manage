import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import {
  loadQuery,
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import { GetMyInfoQuery } from "./__generated__/GetMyInfoQuery.graphql";

export const getMyInfoQuery = graphql`
  query GetMyInfoQuery {
    getMyInfo {
      ok
      error
      user {
        id
        name
        email
      }
    }
  }
`;

// GetMyInfoQuery는 로그인 후에 실행되어야 함.
// loadQuery를 사용하면 로그인 전에 페칭되어 null값을 들고오므로 로그인을 시도해도 곧바로 로그아웃됨
// 로그인 전에 미리 페칭되는 것을 방지하기 위해 Lazy 로딩을 하든가 useQueryLoader를 대신 써야함
// const getMyInfoQueryReference = loadQuery<GetMyInfoQuery>(
//   environment,
//   getMyInfoQuery,
//   {}
// );
export const useGetMyInfo = () => {
  const { getMyInfo } = useLazyLoadQuery<GetMyInfoQuery>(getMyInfoQuery, {});

  const navigate = useNavigate();

  useEffect(() => {
    if (!getMyInfo.ok) {
      localStorage.removeItem("TOKEN");
      navigate("/login");
      window.location.reload();
    }
  }, [getMyInfo.ok]);
  return { getMyInfo };
};
