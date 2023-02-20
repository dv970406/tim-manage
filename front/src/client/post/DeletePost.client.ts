import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  DeletePostMutation,
  DeletePostMutation$variables,
} from "./__generated__/DeletePostMutation.graphql";

const deletePostQuery = graphql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(input: { id: $id }) {
      ok
      error
      deletedPostId @deleteRecord
    }
  }
`;

export const useDeletePost = () => {
  const [deletePostLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const deletePostMutation = (variables: DeletePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeletePostMutation>(environment, {
      mutation: deletePostQuery,
      variables,
      onCompleted: ({ deletePost: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/post");
      },
      updater: (proxyStore, { deletePost: { deletedPostId } }) => {
        const postRecord = proxyStore.getRoot();
        if (!postRecord) return;

        const postConnection = ConnectionHandler.getConnection(
          postRecord,
          "PostsTable_getPosts"
        );

        if (!postConnection || !deletedPostId) return;

        ConnectionHandler.deleteNode(postConnection, deletedPostId);
      },
    });
  };

  return { deletePostMutation, deletePostLoading };
};
