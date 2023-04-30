import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateUserMutation,
  UpdateUserMutation$variables,
} from "./__generated__/UpdateUserMutation.graphql";

const updateUserQuery = graphql`
  mutation UpdateUserMutation(
    $userId: ID!
    $email: String
    $isManager: Boolean
    $name: String
    $joinDate: DateTime
    $availableVacation: String
    $positionId: ID
    $teamId: ID
  ) {
    updateUser(
      input: {
        userId: $userId
        email: $email
        isManager: $isManager
        name: $name
        joinDate: $joinDate
        availableVacation: $availableVacation
        positionId: $positionId
        teamId: $teamId
      }
    ) {
      ok
      error
      user {
        id
        email
        isManager
        name
        joinDate
        availableVacation
        position {
          id
          position
        }
        team {
          id
          team
        }
      }
    }
  }
`;

export const useUpdateUser = () => {
  const [updateUserLoading, setIsLoading] = useState(false);
  const updateUserMutation = (variables: UpdateUserMutation$variables) => {
    setIsLoading(true);
    commitMutation<UpdateUserMutation>(environment, {
      mutation: updateUserQuery,
      variables,

      onCompleted: ({ updateUser: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }

        alert("저장되었습니다.");
      },
      updater: (proxyStore, { updateUser: { user } }) => {
        const updateUserPayload = proxyStore
          .getRootField("updateUser")
          .getLinkedRecord("user");

        if (!updateUserPayload) return;

        const userRecord = proxyStore.get(
          `client:root:getUser(input:{"id":"${user?.id}"})`
        );

        userRecord?.setLinkedRecord(updateUserPayload, "user");
      },
    });
  };

  return { updateUserMutation, updateUserLoading };
};
