/**
 * @generated SignedSource<<c02cf682521f057f6f14a7b2a173d104>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from "relay-runtime";
export type ReceiveInRoomSubscription$variables = {
  roomId: string;
};
export type ReceiveInRoomSubscription$data = {
  readonly receiveInRoom: {
    readonly id: string;
    readonly message: string;
    readonly user: {
      readonly id: string;
      readonly name: string;
    };
  };
};
export type ReceiveInRoomSubscription = {
  response: ReceiveInRoomSubscription$data;
  variables: ReceiveInRoomSubscription$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "roomId",
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v2 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "roomId",
            variableName: "roomId",
          },
        ],
        concreteType: "Message",
        kind: "LinkedField",
        name: "receiveInRoom",
        plural: false,
        selections: [
          v1 /*: any*/,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: false,
            selections: [
              v1 /*: any*/,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "ReceiveInRoomSubscription",
      selections: v2 /*: any*/,
      type: "Subscription",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "ReceiveInRoomSubscription",
      selections: v2 /*: any*/,
    },
    params: {
      cacheID: "2e7e0ec64df77efc4c814e712898d70d",
      id: null,
      metadata: {},
      name: "ReceiveInRoomSubscription",
      operationKind: "subscription",
      text: "subscription ReceiveInRoomSubscription(\n  $roomId: ID!\n) {\n  receiveInRoom(roomId: $roomId) {\n    id\n    message\n    user {\n      id\n      name\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "3dc782bc76ec8c491635f6adbe4d0d75";

export default node;
