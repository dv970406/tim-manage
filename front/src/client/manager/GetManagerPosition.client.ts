import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetManagerPositionQuery } from "./__generated__/GetManagerPositionQuery.graphql";

export const getManagerPositionQuery = graphql`
  query GetManagerPositionQuery($id: ID!, $skip: Boolean!) {
    getPosition(input: { id: $id }) @skip(if: $skip) {
      ok
      error
      position {
        id
        position
        users {
          id
          name
        }
      }
    }
  }
`;

// 페이지 로드 시 필요한 데이터가 아니라 해당 유저 클릭시 작동이 필요하므로 lazyLoadQuery
export const useGetManagerPosition = (positionId: string) => {
  const { getPosition } = useLazyLoadQuery<GetManagerPositionQuery>(
    getManagerPositionQuery,
    {
      skip: !positionId,
      id: positionId,
    }
  );

  if (positionId && !getPosition?.ok) {
    alert(getPosition?.error);
  }

  return { position: getPosition?.position };
};
