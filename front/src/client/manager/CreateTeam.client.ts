import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  CreateTeamMutation,
  CreateTeamMutation$variables,
} from "./__generated__/CreateTeamMutation.graphql";

const createTeamQuery = graphql`
  mutation CreateTeamMutation($team: String!) {
    createTeam(input: { team: $team }) {
      ok
      error
      team {
        id
        team
      }
    }
  }
`;

export const useCreateTeam = () => {
  const [createTeamLoading, setIsLoading] = useState(false);
  const [createTeamSuccess, setIsSuccess] = useState<boolean>();

  const createTeamMutation = (variables: CreateTeamMutation$variables) => {
    setIsLoading(true);
    setIsSuccess(false);
    commitMutation<CreateTeamMutation>(environment, {
      mutation: createTeamQuery,
      variables,
      updater: (proxyStore, response) => {
        const addTeamPayload = proxyStore
          .getRootField("createTeam")
          .getLinkedRecord("team");

        if (!addTeamPayload) return;

        const rootGetTeams = proxyStore.get("client:root:getTeams");

        const oldTeams = rootGetTeams?.getLinkedRecords("teams");
        if (!oldTeams) return;

        rootGetTeams?.setLinkedRecords([addTeamPayload, ...oldTeams], "teams");
      },

      onCompleted: ({ createTeam: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        setIsSuccess(true);
      },
    });
  };

  return { createTeamMutation, createTeamLoading, createTeamSuccess };
};
