import { graphql } from "babel-plugin-relay/macro";
import React, { useState } from "react";
import { usePaginationFragment } from "react-relay";
import { SearchAndInfiniteScrollList } from "../../../organisms/scrolls/SearchAndInfiniteScrollList";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { PostsTable_post$key } from "./__generated__/PostsTable_post.graphql";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { PostsTablePaginationQuery } from "./__generated__/PostsTablePaginationQuery.graphql";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import CreatePostModal from "./CreatePostModal";

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
  const [createPostModal, setCreatePostModal] = useState(false);

  return (
    <>
      <ColumnBox>
        {/* <OrderPosts refetch={refetch} /> */}

        <SearchAndInfiniteScrollList
          mutateName={MODAL_NAME.CREATE_POST}
          refetch={refetch}
          loadNext={loadNext}
          hasNext={hasNext}
          isLoadingNext={isLoadingNext}
          openModal={() => setCreatePostModal(true)}
        >
          {edges.map(
            (post) =>
              post.node && (
                <PostTableContent key={post.cursor} post={post.node} />
              )
          )}
        </SearchAndInfiniteScrollList>
      </ColumnBox>
      {createPostModal && (
        <CreatePostModal onClose={() => setCreatePostModal(false)} />
      )}
    </>
  );
};

export default PostsTable;
