import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
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
      position {
        id
        position
      }
    }
  }
`;

export const useCreatePosition = () => {
  const [createPositionLoading, setIsLoading] = useState(false);
  const [createPositionSuccess, setIsSuccess] = useState<boolean>();

  const createPositionMutation = (
    variables: CreatePositionMutation$variables
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
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
        setIsSuccess(true);
      },
    });
  };

  return {
    createPositionMutation,
    createPositionLoading,
    createPositionSuccess,
  };
};
