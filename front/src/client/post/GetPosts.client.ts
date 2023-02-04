import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetPostsQuery } from "./__generated__/GetPostsQuery.graphql";

export const getPostsQuery = graphql`
  query GetPostsQuery {
    getPosts {
      ok
      error
      posts {
        ...PostTableContent_post
      }
    }
  }
`;

export const useGetPosts = (
  getPostsQueryReference: PreloadedQuery<GetPostsQuery>
) => {
  const {
    getPosts: { ok, error, posts },
  } = usePreloadedQuery<GetPostsQuery>(getPostsQuery, getPostsQueryReference);

  if (!ok) {
    alert(error);
  }
  return { posts };
};
