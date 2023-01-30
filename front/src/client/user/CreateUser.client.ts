import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateUserMutation,
  CreateUserMutation$variables,
} from "./__generated__/CreateUserMutation.graphql";

const createUserQuery = graphql`
  mutation CreateUserMutation(
    $email: String!
    $name: String!
    $joinDate: DateTime!
    $positionId: ID!
    $teamId: ID!
  ) {
    createUser(
      input: {
        email: $email
        name: $name
        joinDate: $joinDate
        positionId: $positionId
        teamId: $teamId
      }
    ) {
      ok
      error
      user {
        id
        email
        name
      }
    }
  }
`;

export const useCreateUser = () => {
  const [createUserLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const createUserMutation = (variables: CreateUserMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreateUserMutation>(environment, {
      mutation: createUserQuery,
      variables,
      updater: (proxyStore, response) => {
        const addUserPayload = proxyStore
          .getRootField("createUser")
          .getLinkedRecord("user");

        if (!addUserPayload) return;

        const rootGetUsers = proxyStore.get("client:root:getUsers");

        const oldUsers = rootGetUsers?.getLinkedRecords("users");
        if (!oldUsers) return;

        rootGetUsers?.setLinkedRecords([addUserPayload, ...oldUsers], "users");
      },

      onCompleted: ({ createUser: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        navigate("/user");
        setIsLoading(false);
      },
    });
  };

  return { createUserMutation, createUserLoading };
};
