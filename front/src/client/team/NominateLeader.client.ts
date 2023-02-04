import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  NominateLeaderMutation,
  NominateLeaderMutation$variables,
} from "./__generated__/NominateLeaderMutation.graphql";

const nominateLeaderQuery = graphql`
  mutation NominateLeaderMutation($id: ID!, $userId: ID!) {
    nominateLeader(input: { id: $id, userId: $userId }) {
      ok
      error
    }
  }
`;

export const useNominateLeader = () => {
  const [nominateLeaderLoading, setIsLoading] = useState(false);

  const nominateLeaderMutation = (
    variables: NominateLeaderMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<NominateLeaderMutation>(environment, {
      mutation: nominateLeaderQuery,
      variables,
      onCompleted: ({ nominateLeader: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { nominateLeaderMutation, nominateLeaderLoading };
};
