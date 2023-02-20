import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay";
import { InfiniteScrollListBox } from "../../../organisms/shared/InfiniteScroll";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { GetPostsPaginationQuery } from "../../../organisms/content/post/__generated__/GetPostsPaginationQuery.graphql";
import { PostsTable_post$key } from "./__generated__/PostsTable_post.graphql";

interface IPostsTable {
  posts: PostsTable_post$key;
}

const getPostsFragment = graphql`
  fragment PostsTable_post on Query
  @argumentDefinitions(
    keyword: { type: "String" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "PostsTablePaginationQuery") {
    getPosts(keyword: $keyword, first: $first, after: $after)
      @connection(key: "PostsTable_getPosts") {
      ok
      error
      edges {
        node {
          ...PostTableContent_post
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const PostsTable = ({ posts }: IPostsTable) => {
  const {
    data: {
      getPosts: { edges },
    },
    loadNext,
    isLoadingNext,
    refetch,
    hasNext,
  } = usePaginationFragment<GetPostsPaginationQuery, PostsTable_post$key>(
    getPostsFragment,
    posts
  );

  return (
    <>
      <InfiniteScrollListBox
        refetch={refetch}
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      >
        {edges.map(
          (post: any) =>
            post && <PostTableContent key={post.cursor} post={post.node} />
        )}
      </InfiniteScrollListBox>
    </>
  );
};

export default PostsTable;
