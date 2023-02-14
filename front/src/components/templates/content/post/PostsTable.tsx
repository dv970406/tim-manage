import React from "react";
import { ListBox } from "../../../atomics/boxes/Boxes";
import Table from "../../../molecules/tables/Table";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { PostTableContent_post$key } from "../../../organisms/content/post/__generated__/PostTableContent_post.graphql";

interface IPostsTable {
  posts: readonly PostTableContent_post$key[];
}

const PostsTable = ({ posts }: IPostsTable) => {
  return (
    <ListBox>
      {posts
        .map(
          (post: any) =>
            post && <PostTableContent key={post.__id} post={post} />
        )
        .reverse()}
    </ListBox>
  );
};

export default PostsTable;
