import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetPostQuery } from "./__generated__/GetPostQuery.graphql";

export const getPostQuery = graphql`
  query GetPostQuery($id: ID!) {
    getPost(input: { id: $id }) {
      ok
      error
      post {
        id
        ...CommentsZone_post
        # ContentZone과 MutatePostForm이 Fragment로 갖는 필드는 같음!(중복 기재 가능해서 다행)
        ...ContentZone_post
        ...MutatePostForm_post
      }
    }
  }
`;

export const useGetPost = (
  getPostQueryReference: PreloadedQuery<GetPostQuery>
) => {
  const {
    getPost: { ok, error, post },
  } = usePreloadedQuery<GetPostQuery>(getPostQuery, getPostQueryReference);

  if (!ok) {
    alert(error);
  }
  return { post };
};
