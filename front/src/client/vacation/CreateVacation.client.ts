import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  CreateVacationMutation,
  CreateVacationMutation$variables,
} from "./__generated__/CreateVacationMutation.graphql";

const createVacationQuery = graphql`
  mutation CreateVacationMutation(
    $startDate: DateTime!
    $endDate: DateTime!
    $isHalf: Boolean!
  ) {
    createVacation(
      input: { startDate: $startDate, endDate: $endDate, isHalf: $isHalf }
    ) {
      ok
      error
      vacation {
        id
        startDate
        endDate
        confirmed {
          byCeo
          byLeader
          byManager
        }
        isHalf
        duration
        user {
          id
          name
        }
      }
    }
  }
`;

export const useCreateVacation = () => {
  const [createVacationLoading, setIsLoading] = useState(false);

  const createVacationMutation = (
    variables: CreateVacationMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<CreateVacationMutation>(environment, {
      mutation: createVacationQuery,
      variables,
      updater: (proxyStore, response) => {
        const addVacationPayload = proxyStore
          .getRootField("createVacation")
          .getLinkedRecord("vacation");

        if (!addVacationPayload) return;

        const rootGetVacations = proxyStore.get("client:root:getVacations");

        const oldVacations = rootGetVacations?.getLinkedRecords("vacations");
        if (!oldVacations) return;

        rootGetVacations?.setLinkedRecords(
          [addVacationPayload, ...oldVacations],
          "vacations"
        );
      },

      onCompleted: ({ createVacation: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { createVacationMutation, createVacationLoading };
};
