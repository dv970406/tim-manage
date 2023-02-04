import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../client";
import { GetMyInfoQuery } from "./__generated__/GetMyInfoQuery.graphql";

export const getMyInfoQuery = graphql`
  query GetMyInfoQuery($skip: Boolean!) {
    getMyInfo @skip(if: $skip) {
      ok
      error
      user {
        id
        name
        email
        isManager
        team {
          id
          team
        }
        position {
          id
          position
        }
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
  const token = localStorage.getItem(TOKEN);

  const { getMyInfo } = useLazyLoadQuery<GetMyInfoQuery>(getMyInfoQuery, {
    skip: !token,
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!getMyInfo?.ok) {
      localStorage.removeItem(TOKEN);
      navigate("/login");
    }
  }, []);

  return { myInfo: getMyInfo?.user };
};
