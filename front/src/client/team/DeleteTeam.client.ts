import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  DeleteTeamMutation,
  DeleteTeamMutation$variables,
} from "./__generated__/DeleteTeamMutation.graphql";

const deleteTeamQuery = graphql`
  mutation DeleteTeamMutation($id: ID!) {
    deleteTeam(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeleteTeam = () => {
  const [deleteTeamLoading, setIsLoading] = useState(false);

  const deleteTeamMutation = (variables: DeleteTeamMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeleteTeamMutation>(environment, {
      mutation: deleteTeamQuery,
      variables,
      onCompleted: ({ deleteTeam: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { deleteTeamMutation, deleteTeamLoading };
};
