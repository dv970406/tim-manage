import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { NominateLeaderMutation } from "./__generated__/NominateLeaderMutation.graphql";

const nominateLeader = graphql`
  mutation NominateLeaderMutation($id: ID!, $userId: ID!) {
    nominateLeader(input: { id: $id, userId: $userId }) {
      ok
      error
    }
  }
`;

export const useNominateLeader = () => {
  const data = useMutation<NominateLeaderMutation>(nominateLeader);

  return data;
};
