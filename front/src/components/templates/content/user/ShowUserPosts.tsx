import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import {
  RowBox,
  GapBox,
  ItemBox,
  ListBox,
  VerticalDivider,
} from "../../../atomics/boxes/Boxes";
import { MainText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import Table from "../../../molecules/tables/Table";
import { Td, Tr } from "../../../molecules/tables/Td";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { PostTableContent_post$key } from "../../../organisms/content/post/__generated__/PostTableContent_post.graphql";
import UserTableContent from "../../../organisms/content/user/UserTableContent";
import { ShowUserPosts_post$key } from "./__generated__/ShowUserPosts_post.graphql";

const showUserPostsFragment = graphql`
  fragment ShowUserPosts_post on User {
    posts {
      ...PostTableContent_post
    }
    likes {
      id
      post {
        ...PostTableContent_post
      }
    }
    comments {
      id
      post {
        ...PostTableContent_post
      }
      content
    }
  }
`;

const ShowUserPosts = () => {
  const user: ShowUserPosts_post$key = useOutletContext();
  const { posts, comments, likes } = useFragment(showUserPostsFragment, user);

  console.log(posts, comments, likes);
  return (
    <RowBox style={{ height: "auto" }}>
      <ListBox style={{ gridTemplateColumns: "1fr" }}>
        <SectionTitle>내 글 목록</SectionTitle>
        {posts?.map(
          (post: any) =>
            post && <PostTableContent key={post.__id} post={post} />
        )}
      </ListBox>
      <VerticalDivider />
      <ListBox style={{ gridTemplateColumns: "1fr" }}>
        <SectionTitle>댓글 목록</SectionTitle>
        {comments?.map(
          (comment) =>
            comment && (
              <>
                <PostTableContent key={comment.id} post={comment.post} />
                <MainText>{comment.content}</MainText>
              </>
            )
        )}
      </ListBox>
      <VerticalDivider />
      <ListBox style={{ gridTemplateColumns: "1fr" }}>
        <SectionTitle>좋아요 목록</SectionTitle>
        {likes?.map(
          (like) => like && <PostTableContent key={like.id} post={like.post} />
        )}
      </ListBox>
    </RowBox>
  );
};

export default ShowUserPosts;
