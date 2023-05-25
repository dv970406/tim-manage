import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { insertEdgeToData } from "../../utils/func/connection";
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
        const newVacationEdge = proxyStore
          .getRootField("createVacation")
          .getLinkedRecord("vacation");

        if (!newVacationEdge) return;

        const vacationsRecord = proxyStore.get("client:root:getVacations");

        const oldVacations = vacationsRecord?.getLinkedRecords("vacations");
        if (!oldVacations) return;

        vacationsRecord?.setLinkedRecords(
          [newVacationEdge, ...oldVacations],
          "vacations"
        );

        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        insertEdgeToData({
          record: myInfoRecord,
          key: "ShowUserVacations_myVacationsConnection",
          newEdge: newVacationEdge,
        });
      },

      onCompleted: ({ createVacation: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { createVacationMutation, createVacationLoading };
};
