import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { UpdateTeamMutation } from "./__generated__/UpdateTeamMutation.graphql";

const updateTeam = graphql`
  mutation UpdateTeamMutation($id: ID!, $team: String!) {
    updateTeam(input: { id: $id, team: $team }) {
      ok
      error
    }
  }
`;

export const useUpdateTeam = () => {
  const data = useMutation<UpdateTeamMutation>(updateTeam);

  return data;
};
