import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  DeleteUserMutation,
  DeleteUserMutation$variables,
} from "./__generated__/DeleteUserMutation.graphql";

const deleteUserQuery = graphql`
  mutation DeleteUserMutation($id: ID!) {
    deleteUser(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeleteUser = () => {
  const [deleteUserLoading, setIsLoading] = useState(false);

  const deleteUserMutation = (variables: DeleteUserMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeleteUserMutation>(environment, {
      mutation: deleteUserQuery,
      variables,
      onCompleted: ({ deleteUser: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { deleteUserMutation, deleteUserLoading };
};
