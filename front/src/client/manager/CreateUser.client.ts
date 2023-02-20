import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateUserMutation,
  CreateUserMutation$variables,
} from "../user/__generated__/CreateUserMutation.graphql";

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
      edge {
        cursor
        node {
          id
          name
          email
          isManager
          position {
            id
            position
          }
          team {
            id
            team
          }
          joinDate
          createdAt
        }
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
        // const addUserPayload = proxyStore
        //   .getRootField("createUser")
        //   .getLinkedRecord("user");

        // if (!addUserPayload) return;

        // const rootGetUsers = proxyStore.get("client:root:getUsers");

        // const oldUsers = rootGetUsers?.getLinkedRecords("users");
        // if (!oldUsers) return;

        // rootGetUsers?.setLinkedRecords([addUserPayload, ...oldUsers], "users");

        const newUserEdge = proxyStore
          .getRootField("createUser")
          .getLinkedRecord("edge");
        if (!newUserEdge) return;

        const userRecord = proxyStore.getRoot();
        if (!userRecord) return;

        const userConnection = ConnectionHandler.getConnection(
          userRecord,
          "UsersTable_getUsers"
        );
        const managerUserConnection = ConnectionHandler.getConnection(
          userRecord,
          "ManagerUsersTable_getUsers"
        );

        if (userConnection)
          ConnectionHandler.insertEdgeBefore(userConnection, newUserEdge);
        if (managerUserConnection)
          ConnectionHandler.insertEdgeBefore(
            managerUserConnection,
            newUserEdge
          );
      },

      onCompleted: ({ createUser: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/manager/user");
      },
    });
  };

  return { createUserMutation, createUserLoading };
};
