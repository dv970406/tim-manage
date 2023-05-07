import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment, TOKEN } from "../client";
import {
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutation$variables,
} from "./__generated__/UpdateUserPasswordMutation.graphql";

const updateUserPasswordQuery = graphql`
  mutation UpdateUserPasswordMutation($password: String!) {
    updateUserPassword(input: { password: $password }) {
      ok
      error
    }
  }
`;

export const useUpdateUserPassword = () => {
  const [updateUserLoading, setIsLoading] = useState(false);
  const updateUserMutation = (
    variables: UpdateUserPasswordMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<UpdateUserPasswordMutation>(environment, {
      mutation: updateUserPasswordQuery,
      variables,

      onCompleted: ({ updateUserPassword: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }

        alert("저장되었습니다.");
        localStorage.removeItem(TOKEN);
        window.location.reload();
      },
    });
  };

  return { updateUserMutation, updateUserLoading };
};
