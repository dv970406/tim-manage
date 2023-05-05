import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  UpdatePostMutation,
  UpdatePostMutation$variables,
} from "./__generated__/UpdatePostMutation.graphql";

const updatePostQuery = graphql`
  mutation UpdatePostMutation($postId: ID!, $title: String, $content: String) {
    updatePost(input: { postId: $postId, title: $title, content: $content }) {
      ok
      error
      post {
        id
        title
        content
      }
    }
  }
`;

export const useUpdatePost = () => {
  const [updatePostLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const updatePostMutation = (variables: UpdatePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<UpdatePostMutation>(environment, {
      mutation: updatePostQuery,
      variables,
      onCompleted: ({ updatePost: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate(`/post/${variables.postId}`);
      },
      updater: (proxyStore, { updatePost: { post } }) => {
        const updatePostPayload = proxyStore
          .getRootField("updatePost")
          .getLinkedRecord("user");

        if (!updatePostPayload || !post?.id) return;

        const rootGetPost = proxyStore.get(post?.id);

        rootGetPost?.setLinkedRecord(updatePostPayload, "user");
      },
    });
  };

  return { updatePostMutation, updatePostLoading };
};
