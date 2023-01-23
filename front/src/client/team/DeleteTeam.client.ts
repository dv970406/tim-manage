import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { DeleteTeamMutation } from "./__generated__/DeleteTeamMutation.graphql";

const deleteTeam = graphql`
  mutation DeleteTeamMutation($id: ID!) {
    deleteTeam(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeleteTeam = () => {
  const data = useMutation<DeleteTeamMutation>(deleteTeam);

  return data;
};
