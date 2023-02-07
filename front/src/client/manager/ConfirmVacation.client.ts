import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  ConfirmVacationMutation,
  ConfirmVacationMutation$variables,
} from "./__generated__/ConfirmVacationMutation.graphql";

const confirmVacationQuery = graphql`
  mutation ConfirmVacationMutation($id: ID!) {
    confirmVacation(input: { id: $id }) {
      ok
      error
      vacation {
        id
        confirmed {
          byCeo
          byLeader
          byManager
        }
      }
    }
  }
`;

export const useConfirmVacation = () => {
  const [confirmVacationLoading, setIsLoading] = useState(false);
  const [confirmVacationSuccess, setIsSuccess] = useState<boolean>();

  const confirmVacationMutation = (
    variables: ConfirmVacationMutation$variables
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    commitMutation<ConfirmVacationMutation>(environment, {
      mutation: confirmVacationQuery,
      variables,
      onCompleted: ({ confirmVacation: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        alert("저장되었습니다.");
        setIsSuccess(true);
      },
      updater: (proxyStore, response) => {
        const confirmVacationPayload = proxyStore
          .getRootField("confirmVacation")
          .getLinkedRecord("vacation");

        if (!confirmVacationPayload) return;

        proxyStore.delete(variables?.id);
      },
    });
  };

  return {
    confirmVacationMutation,
    confirmVacationLoading,
    confirmVacationSuccess,
  };
};
