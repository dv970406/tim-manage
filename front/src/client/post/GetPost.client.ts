import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetPostQuery } from "./__generated__/GetPostQuery.graphql";

export const getPostQuery = graphql`
  query GetPostQuery($id: ID!) {
    getPost(input: { id: $id }) {
      ok
      error
      post {
        id
        ...ContentZone_post
        ...CommentsZone_post
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
