import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreatePostMutation,
  CreatePostMutation$variables,
} from "./__generated__/CreatePostMutation.graphql";

const createPostQuery = graphql`
  mutation CreatePostMutation($title: String!, $content: String!) {
    createPost(input: { title: $title, content: $content }) {
      ok
      error
      edge {
        cursor
        node {
          id
          title
          user {
            id
            name
          }
          isLiked
          countLikes
          countComments
          createdAt
        }
      }
    }
  }
`;

export const useCreatePost = () => {
  const [createPostLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createPostMutation = (variables: CreatePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreatePostMutation>(environment, {
      mutation: createPostQuery,
      variables,
      updater: (proxyStore, response) => {
        // const addPostPayload = proxyStore
        //   .getRootField("createPost")
        //   .getLinkedRecord("edge");

        // if (!addPostPayload) return;

        // const rootGetPosts = proxyStore.get("client:root:getPosts");

        // const oldPosts = rootGetPosts?.getLinkedRecords("posts");

        // // 아래처럼 return하면 rootGetMyInfo 코드는 진행도 못되고 return되어버리기에 if 코드블럭 안에 넣는 것으로 수정
        // // if (!oldPosts) return;
        // if (oldPosts) {
        //   rootGetPosts?.setLinkedRecords(
        //     [...oldPosts, addPostPayload],
        //     "posts"
        //   );
        // }

        const newPostEdge = proxyStore
          .getRootField("createPost")
          .getLinkedRecord("edge");
        if (!newPostEdge) return;

        const postRecord = proxyStore.getRoot();
        if (!postRecord) return;

        const postConnection = ConnectionHandler.getConnection(
          postRecord,
          "PostsTable_getPosts"
        );
        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        if (!myInfoRecord) return;
        const myPostConnection = ConnectionHandler.getConnection(
          myInfoRecord,
          "ShowUserPosts_myPostsConnection"
        );
        if (postConnection)
          ConnectionHandler.insertEdgeBefore(postConnection, newPostEdge);
        if (myPostConnection)
          ConnectionHandler.insertEdgeBefore(myPostConnection, newPostEdge);

        // // 글쓰기를 하면 myInfo에 내 게시글 목록에 추가
        // const rootGetMyInfo = proxyStore.get("client:root:getMyInfo");
        // const rootGetMyInfoUser = rootGetMyInfo?.getLinkedRecord("user");
        // const oldMyPosts = rootGetMyInfoUser?.getLinkedRecords("posts");

        // if (oldMyPosts) {
        //   rootGetMyInfoUser?.setLinkedRecords(
        //     [...oldMyPosts, newPostEdge],
        //     "posts"
        //   );
        // }
      },

      onCompleted: ({ createPost: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/post");
      },
    });
  };

  return { createPostMutation, createPostLoading };
};
