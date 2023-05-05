import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { insertEdgeToData } from "../../utils/shared/connection";
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
        const newPostEdge = proxyStore
          .getRootField("createPost")
          .getLinkedRecord("edge");
        if (!newPostEdge) return;

        const rootRecord = proxyStore.getRoot();
        insertEdgeToData({
          record: rootRecord,
          key: "PostsTable_getPosts",
          newEdge: newPostEdge,
        });

        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        insertEdgeToData({
          record: myInfoRecord,
          key: "ShowUserPosts_myPostsConnection",
          newEdge: newPostEdge,
        });
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
