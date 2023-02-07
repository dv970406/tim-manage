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
      position {
        id
        position
      }
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
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
      updater: (proxyStore, { updatePosition: { position } }) => {
        const updatePositionPayload = proxyStore
          .getRootField("updatePosition")
          .getLinkedRecord("position");

        if (!updatePositionPayload) return;

        const rootGetPost = proxyStore.get(
          `client:root:getPosition(input:{"id":"${position?.id}"})`
        );

        rootGetPost?.setLinkedRecord(updatePositionPayload, "position");
      },
    });
  };

  return { updatePositionMutation, updatePositionLoading };
};
