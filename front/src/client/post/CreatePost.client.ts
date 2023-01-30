import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
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
      post {
        id
        title
      }
    }
  }
`;

export const useCreatePost = () => {
  const [createPostLoading, setIsLoading] = useState(false);

  const createPostMutation = (variables: CreatePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreatePostMutation>(environment, {
      mutation: createPostQuery,
      variables,
      updater: (proxyStore, response) => {
        const addPostPayload = proxyStore
          .getRootField("createPost")
          .getLinkedRecord("post");

        if (!addPostPayload) return;

        const rootGetPosts = proxyStore.get("client:root:getPosts");

        const oldPosts = rootGetPosts?.getLinkedRecords("posts");
        if (!oldPosts) return;

        rootGetPosts?.setLinkedRecords([addPostPayload, ...oldPosts], "posts");
      },

      onCompleted: ({ createPost: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { createPostMutation, createPostLoading };
};
