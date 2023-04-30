import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
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
      deletedPositionId @deleteRecord
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
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { deletePositionMutation, deletePositionLoading };
};
