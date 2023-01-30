import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
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
    }
  }
`;

export const useDeletePost = () => {
  const [deletePostLoading, setIsLoading] = useState(false);

  const deletePostMutation = (variables: DeletePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeletePostMutation>(environment, {
      mutation: deletePostQuery,
      variables,
      onCompleted: ({ deletePost: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { deletePostMutation, deletePostLoading };
};
