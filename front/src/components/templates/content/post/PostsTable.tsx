import React from "react";
import Table from "../../../molecules/tables/Table";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { PostTableContent_post$key } from "../../../organisms/content/post/__generated__/PostTableContent_post.graphql";

interface IPostsTable {
  posts: readonly PostTableContent_post$key[];
}
const PostsTable = ({ posts }: IPostsTable) => {
  return (
    <Table headers={["제목", "작성자", "좋아요 개수", "댓글 개수", "게시일"]}>
      {posts
        ?.filter((post) => !!post)
        .map((post: any) => (
          <PostTableContent key={post.__id} post={post} />
        ))}
    </Table>
  );
};

export default PostsTable;
