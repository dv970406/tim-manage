import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateCommentMutation,
  CreateCommentMutation$variables,
} from "./__generated__/CreateCommentMutation.graphql";

const createCommentQuery = graphql`
  mutation CreateCommentMutation($postId: ID!, $content: String!) {
    createComment(input: { postId: $postId, content: $content }) {
      ok
      error
      comment {
        id
        content
        user {
          id
          name
        }
      }
      postId
    }
  }
`;

export const useCreateComment = () => {
  const [createCommentLoading, setIsLoading] = useState(false);
  const [createCommentSuccess, setCreateCommentSuccess] = useState<boolean>();

  const createCommentMutation = (
    variables: CreateCommentMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<CreateCommentMutation>(environment, {
      mutation: createCommentQuery,
      variables,
      updater: (proxyStore, response) => {
        const addCommentPayload = proxyStore
          .getRootField("createComment")
          .getLinkedRecord("comment");

        if (!addCommentPayload) return;

        const rootGetComments = proxyStore.get(
          `client:root:getPost(input:{"id":"${response.createComment.postId}"})`
        );

        const targetPost = rootGetComments?.getLinkedRecord("post");
        const oldComments = targetPost?.getLinkedRecords("comments");

        if (!targetPost || !oldComments) return;

        targetPost?.setLinkedRecords(
          [addCommentPayload, ...oldComments],
          "comments"
        );
      },

      onCompleted: ({ createComment: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);

          setCreateCommentSuccess(false);
          return;
        }
        setCreateCommentSuccess(true);
      },
    });
  };
  return { createCommentMutation, createCommentLoading, createCommentSuccess };
};
