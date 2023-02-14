import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { getPostsQuery, useGetPosts } from "../../client/post/GetPosts.client";
import { GetPostsQuery } from "../../client/post/__generated__/GetPostsQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import PostsTable from "../../components/templates/content/post/PostsTable";

const PostsPage = () => {
  const [getPostsQueryReference, loadGetPostsQuery] =
    useQueryLoader<GetPostsQuery>(getPostsQuery);

  useEffect(() => {
    loadGetPostsQuery({});
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
