import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateTeamMutation,
  UpdateTeamMutation$variables,
} from "./__generated__/UpdateTeamMutation.graphql";

const updateTeamQuery = graphql`
  mutation UpdateTeamMutation($id: ID!, $team: String!) {
    updateTeam(input: { id: $id, team: $team }) {
      ok
      error
    }
  }
`;

export const useUpdateTeam = () => {
  const [updateTeamLoading, setIsLoading] = useState(false);

  const updateTeamMutation = (variables: UpdateTeamMutation$variables) => {
    setIsLoading(true);
    commitMutation<UpdateTeamMutation>(environment, {
      mutation: updateTeamQuery,
      variables,
      onCompleted: ({ updateTeam: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { updateTeamMutation, updateTeamLoading };
};
