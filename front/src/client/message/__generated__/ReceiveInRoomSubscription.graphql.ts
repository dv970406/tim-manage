/**
 * @generated SignedSource<<61d7a91f7ca94dcf24ea242141aa5e8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type ReceiveInRoomSubscription$variables = {
  roomId: string;
};
export type ReceiveInRoomSubscription$data = {
  readonly receiveInRoom: {
    readonly edge: {
      readonly cursor: any;
      readonly node: {
        readonly createdAt: any;
        readonly id: string;
        readonly isMine: boolean;
        readonly message: string;
        readonly user: {
          readonly id: string;
          readonly name: string;
        };
      };
    };
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type ReceiveInRoomSubscription = {
  response: ReceiveInRoomSubscription$data;
  variables: ReceiveInRoomSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "roomId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "roomId",
        "variableName": "roomId"
      }
    ],
    "concreteType": "ReceiveInRoomOutput",
    "kind": "LinkedField",
    "name": "receiveInRoom",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MessageEdge",
        "kind": "LinkedField",
        "name": "edge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "message",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isMine",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReceiveInRoomSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReceiveInRoomSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1b0df3211f30c9d2724bb5f2ab4a3f8a",
    "id": null,
    "metadata": {},
    "name": "ReceiveInRoomSubscription",
    "operationKind": "subscription",
    "text": "subscription ReceiveInRoomSubscription(\n  $roomId: ID!\n) {\n  receiveInRoom(roomId: $roomId) {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        message\n        user {\n          id\n          name\n        }\n        createdAt\n        isMine\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c07ae7c68e65e0082f6ac0c88ecf0996";

export default node;
