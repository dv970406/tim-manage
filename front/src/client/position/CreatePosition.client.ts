import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  CreatePositionMutation,
  CreatePositionMutation$variables,
} from "./__generated__/CreatePositionMutation.graphql";

const createPositionQuery = graphql`
  mutation CreatePositionMutation($position: String!) {
    createPosition(input: { position: $position }) {
      ok
      error
    }
  }
`;

export const useCreatePosition = () => {
  const [createPositionLoading, setIsLoading] = useState(false);

  const createPositionMutation = (
    variables: CreatePositionMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<CreatePositionMutation>(environment, {
      mutation: createPositionQuery,
      variables,
      updater: (proxyStore, response) => {
        const addPositionPayload = proxyStore
          .getRootField("createPosition")
          .getLinkedRecord("position");

        if (!addPositionPayload) return;

        const rootGetPositions = proxyStore.get("client:root:getPositions");

        const oldPositions = rootGetPositions?.getLinkedRecords("positions");
        if (!oldPositions) return;

        rootGetPositions?.setLinkedRecords(
          [addPositionPayload, ...oldPositions],
          "positions"
        );
      },

      onCompleted: ({ createPosition: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { createPositionMutation, createPositionLoading };
};
