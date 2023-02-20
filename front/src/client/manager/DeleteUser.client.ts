import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
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
      deletedUserId @deleteRecord
    }
  }
`;

export const useDeleteUser = () => {
  const [deleteUserLoading, setIsLoading] = useState(false);
  // const [deleteIsSuccess, setIsSuccess] = useState<boolean>();

  const deleteUserMutation = (variables: DeleteUserMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeleteUserMutation>(environment, {
      mutation: deleteUserQuery,
      variables,
      onCompleted: ({ deleteUser: { ok, error } }) => {
        setIsLoading(false);
        // setIsSuccess(ok);
        if (!ok) {
          alert(error);
          return;
        }
        alert("저장되었습니다.");
      },
      updater: (proxyStore, { deleteUser: { deletedUserId } }) => {
        const userRecord = proxyStore.getRoot();
        if (!userRecord) return;

        const userConnection = ConnectionHandler.getConnection(
          userRecord,
          "UsersTable_getUsers"
        );

        if (!userConnection || !deletedUserId) return;

        ConnectionHandler.deleteNode(userConnection, deletedUserId);
      },
    });
  };

  return { deleteUserMutation, deleteUserLoading };
};
