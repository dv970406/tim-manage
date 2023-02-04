import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "relay-runtime";
import { environment } from "../client";
import {
  DeleteVacationMutation,
  DeleteVacationMutation$variables,
} from "./__generated__/DeleteVacationMutation.graphql";

const deleteVacationQuery = graphql`
  mutation DeleteVacationMutation($id: ID!) {
    deleteVacation(input: { id: $id }) {
      ok
      error
      deletedVacationId @deleteRecord
    }
  }
`;

export const useDeleteVacation = () => {
  const [deleteVacationLoading, setIsLoading] = useState(false);

  const deleteVacationMutation = (
    variables: DeleteVacationMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<DeleteVacationMutation>(environment, {
      mutation: deleteVacationQuery,
      variables,
      onCompleted: ({ deleteVacation: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { deleteVacationMutation, deleteVacationLoading };
};
