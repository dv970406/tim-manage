import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetManagerUserQuery } from "./__generated__/GetManagerUserQuery.graphql";

export const getManagerUserQuery = graphql`
  query GetManagerUserQuery($userId: ID!, $skip: Boolean!) {
    getUser(userId: $userId) @skip(if: $skip) {
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
        # attendedMeetings {
        #   id
        # }
        availableVacation
      }
    }
  }
`;

// 페이지 로드 시 필요한 데이터가 아니라 해당 유저 클릭시 작동이 필요하므로 lazyLoadQuery
export const useGetManagerUser = (userId: string) => {
  const { getUser } = useLazyLoadQuery<GetManagerUserQuery>(
    getManagerUserQuery,
    {
      skip: !userId,
      userId,
    }
  );

  if (userId && !getUser?.ok) {
    alert(getUser?.error);
  }

  return { user: getUser?.user };
};
