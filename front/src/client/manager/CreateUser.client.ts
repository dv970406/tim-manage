import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { insertEdgeToData } from "../../utils/shared/connection";
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
  const createUserMutation = (variables: CreateUserMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreateUserMutation>(environment, {
      mutation: createUserQuery,
      variables,
      updater: (proxyStore, response) => {
        const newUserEdge = proxyStore
          .getRootField("createUser")
          .getLinkedRecord("edge");
        if (!newUserEdge) return;

        const rootRecord = proxyStore.getRoot();

        insertEdgeToData({
          record: rootRecord,
          key: "UsersTable_getUsers",
          newEdge: newUserEdge,
        });

        insertEdgeToData({
          record: rootRecord,
          key: "ManagerUsersTable_getUsers",
          newEdge: newUserEdge,
        });
      },

      onCompleted: ({ createUser: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { createUserMutation, createUserLoading };
};
