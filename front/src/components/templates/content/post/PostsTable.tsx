import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay";
import { SearchAndInfiniteScrollDataList } from "../../../organisms/shared/InfiniteScrolls";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { GetPostsPaginationQuery } from "../../../organisms/content/post/__generated__/GetPostsPaginationQuery.graphql";
import { PostsTable_post$key } from "./__generated__/PostsTable_post.graphql";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { PostsTablePaginationQuery } from "./__generated__/PostsTablePaginationQuery.graphql";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";
import { ColumnBox } from "../../../atomics/boxes/Boxes";
import OrderPosts from "../../../organisms/content/post/OrderPosts";

interface IPostsTable {
  posts: PostsTable_post$key;
}

const getPostsFragment = graphql`
  fragment PostsTable_post on Query
  @argumentDefinitions(
    keyword: { type: "String" }
    orders: { type: "Orders" }

    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "PostsTablePaginationQuery") {
    getPosts(keyword: $keyword, orders: $orders, first: $first, after: $after)
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
  } = usePaginationFragment<PostsTablePaginationQuery, PostsTable_post$key>(
    getPostsFragment,
    posts
  );

  return (
    <ColumnBox>
      <OrderPosts refetch={refetch} />

      <SearchAndInfiniteScrollDataList
        mutateName={MODAL_NAME.CREATE_POST}
        refetch={refetch}
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        hasAddButton={true}
      >
        {edges.map(
          (post) =>
            post.node && <PostTableContent key={post.cursor} post={post.node} />
        )}
      </SearchAndInfiniteScrollDataList>
    </ColumnBox>
  );
};

export default PostsTable;
