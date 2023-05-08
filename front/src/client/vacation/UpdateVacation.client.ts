import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateVacationMutation,
  UpdateVacationMutation$variables,
} from "./__generated__/UpdateVacationMutation.graphql";

const updateVacationQuery = graphql`
  mutation UpdateVacationMutation(
    $vacationId: ID!
    $startDate: DateTime
    $endDate: DateTime
    $isHalf: Boolean
  ) {
    updateVacation(
      input: {
        vacationId: $vacationId
        startDate: $startDate
        endDate: $endDate
        isHalf: $isHalf
      }
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
          availableVacation
        }
      }
      notificationsIdOfVacation
    }
  }
`;

export const useUpdateVacation = () => {
  const [updateVacationLoading, setIsLoading] = useState(false);

  const updateVacationMutation = (
    variables: UpdateVacationMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<UpdateVacationMutation>(environment, {
      mutation: updateVacationQuery,
      variables,
      onCompleted: ({ updateVacation: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          return alert(error);
        }
      },
      updater: (proxyStore, { updateVacation }) => {
        const myInfoRecord = proxyStore.get("client:root:getMyInfo");

        const updatedAvailableVacationRecord = proxyStore
          .getRootField("updateVacation")
          .getLinkedRecord("vacation")
          .getLinkedRecord("user");

        myInfoRecord?.setLinkedRecord(updatedAvailableVacationRecord, "user");

        updateVacation.notificationsIdOfVacation?.map((notificationId) =>
          proxyStore.delete(notificationId)
        );
      },
    });
  };

  return { updateVacationMutation, updateVacationLoading };
};
