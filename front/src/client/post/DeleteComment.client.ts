import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  DeleteCommentMutation,
  DeleteCommentMutation$variables,
} from "./__generated__/DeleteCommentMutation.graphql";

const deleteCommentQuery = graphql`
  mutation DeleteCommentMutation($id: ID!) {
    deleteComment(input: { id: $id }) {
      ok
      error
      deletedCommentId @deleteRecord
      postId
    }
  }
`;

export const useDeleteComment = () => {
  const [deleteCommentLoading, setIsLoading] = useState(false);

  const deleteCommentMutation = (
    variables: DeleteCommentMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<DeleteCommentMutation>(environment, {
      mutation: deleteCommentQuery,
      variables,
      onCompleted: ({ deleteComment: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
      updater: (proxyStore, { deleteComment }) => {
        // 댓글 지워지면 해당 Post의 countComments -1 해줘야함
        const rootGetPosts = proxyStore.get(
          `client:root:getPost(input:{"id":"${deleteComment.postId}"})`
        );
        const targetPost = rootGetPosts?.getLinkedRecord("post");
        const prevCount = targetPost?.getValue("countComments") || 0;
        targetPost?.setValue(+prevCount - 1, "countComments");
      },
    });
  };

  return { deleteCommentMutation, deleteCommentLoading };
};
