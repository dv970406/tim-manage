import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetPostsQuery } from "./__generated__/GetPostsQuery.graphql";

export const getPostsQuery = graphql`
  query GetPostsQuery(
    $keyword: String
    $orders: Orders
    $first: Int!
    $after: DateTime
  ) {
    ...PostsTable_post
      @arguments(
        keyword: $keyword
        orders: $orders
        first: $first
        after: $after
      )
  }
`;

export const useGetPosts = (
  getPostsQueryReference: PreloadedQuery<GetPostsQuery>
) => {
  const posts = usePreloadedQuery<GetPostsQuery>(
    getPostsQuery,
    getPostsQueryReference
  );

  return { posts };
};
