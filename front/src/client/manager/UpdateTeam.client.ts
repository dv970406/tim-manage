import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateTeamMutation,
  UpdateTeamMutation$variables,
} from "./__generated__/UpdateTeamMutation.graphql";

const updateTeamQuery = graphql`
  mutation UpdateTeamMutation($teamId: ID!, $team: String, $leaderId: ID) {
    updateTeam(input: { teamId: $teamId, team: $team, leaderId: $leaderId }) {
      ok
      error
      team {
        id
        team
        leader {
          id
          name
        }
      }
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
      updater: (proxyStore, { updateTeam: { team } }) => {
        const updateTeamPayload = proxyStore
          .getRootField("updateTeam")
          .getLinkedRecord("team");

        if (!updateTeamPayload) return;

        const rootGetPost = proxyStore.get(
          `client:root:getTeam(input:{"id":"${team?.id}"})`
        );

        rootGetPost?.setLinkedRecord(updateTeamPayload, "team");
      },
    });
  };

  return { updateTeamMutation, updateTeamLoading };
};
