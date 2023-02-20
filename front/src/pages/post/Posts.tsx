import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { getPostsQuery, useGetPosts } from "../../client/post/GetPosts.client";
import { GetPostsQuery } from "../../client/post/__generated__/GetPostsQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import PostsTable from "../../components/templates/content/post/PostsTable";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const PostsPage = () => {
  const [getPostsQueryReference, loadGetPostsQuery] =
    useQueryLoader<GetPostsQuery>(getPostsQuery);

  useEffect(() => {
    loadGetPostsQuery({ first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback="Posts loading">
      {getPostsQueryReference && (
        <Posts getPostsQueryReference={getPostsQueryReference} />
      )}
    </Suspense>
  );
};
interface IPosts {
  getPostsQueryReference: PreloadedQuery<GetPostsQuery>;
}
const Posts = ({ getPostsQueryReference }: IPosts) => {
  const { posts } = useGetPosts(getPostsQueryReference);

  return <Section noneBg>{posts && <PostsTable posts={posts} />}</Section>;
};
export default PostsPage;
