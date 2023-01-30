import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  DeletePositionMutation,
  DeletePositionMutation$variables,
} from "./__generated__/DeletePositionMutation.graphql";

const deletePositionQuery = graphql`
  mutation DeletePositionMutation($id: ID!) {
    deletePosition(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeletePosition = () => {
  const [deletePositionLoading, setIsLoading] = useState(false);

  const deletePositionMutation = (
    variables: DeletePositionMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<DeletePositionMutation>(environment, {
      mutation: deletePositionQuery,
      variables,
      onCompleted: ({ deletePosition: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { deletePositionMutation, deletePositionLoading };
};
