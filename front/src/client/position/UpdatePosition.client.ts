import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdatePositionMutation,
  UpdatePositionMutation$variables,
} from "./__generated__/UpdatePositionMutation.graphql";

const updatePositionQuery = graphql`
  mutation UpdatePositionMutation($id: ID!, $position: String!) {
    updatePosition(input: { id: $id, position: $position }) {
      ok
      error
    }
  }
`;

export const useUpdatePosition = () => {
  const [updatePositionLoading, setIsLoading] = useState(false);

  const updatePositionMutation = (
    variables: UpdatePositionMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<UpdatePositionMutation>(environment, {
      mutation: updatePositionQuery,
      variables,
      onCompleted: ({ updatePosition: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { updatePositionMutation, updatePositionLoading };
};
