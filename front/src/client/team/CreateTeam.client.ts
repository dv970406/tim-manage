import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { CreateTeamMutation } from "./__generated__/CreateTeamMutation.graphql";

const createTeam = graphql`
  mutation CreateTeamMutation($team: String!) {
    createTeam(input: { team: $team }) {
      ok
      error
    }
  }
`;

export const useCreateTeam = () => {
  const data = useMutation<CreateTeamMutation>(createTeam);

  return data;
};
