/**
 * @generated SignedSource<<d34e079a7fc4a2203945086bae8ce75d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type ReceiveMessageSubscription$variables = {};
export type ReceiveMessageSubscription$data = {
  readonly receiveMessage: {
    readonly error: string | null;
    readonly isMyAlarm: boolean | null;
    readonly messageEdge: {
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
    } | null;
    readonly ok: boolean;
    readonly roomEdge: {
      readonly cursor: any | null;
      readonly node: {
        readonly id: string;
        readonly unreadMessageCount: number;
        readonly users: ReadonlyArray<{
          readonly id: string;
          readonly name: string;
        }>;
      };
    } | null;
  };
};
export type ReceiveMessageSubscription = {
  response: ReceiveMessageSubscription$data;
  variables: ReceiveMessageSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReceiveMessageOutput",
    "kind": "LinkedField",
    "name": "receiveMessage",
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
        "concreteType": "RoomEdge",
        "kind": "LinkedField",
        "name": "roomEdge",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Room",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "unreadMessageCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MessageEdge",
        "kind": "LinkedField",
        "name": "messageEdge",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
                "name": "isMine",
                "storageKey": null
              },
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
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isMyAlarm",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReceiveMessageSubscription",
    "selections": (v3/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReceiveMessageSubscription",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b2e47ea2f42f05849fa5bad70e669f17",
    "id": null,
    "metadata": {},
    "name": "ReceiveMessageSubscription",
    "operationKind": "subscription",
    "text": "subscription ReceiveMessageSubscription {\n  receiveMessage {\n    ok\n    error\n    roomEdge {\n      cursor\n      node {\n        id\n        users {\n          id\n          name\n        }\n        unreadMessageCount\n      }\n    }\n    messageEdge {\n      cursor\n      node {\n        id\n        isMine\n        message\n        user {\n          id\n          name\n        }\n        createdAt\n      }\n    }\n    isMyAlarm\n  }\n}\n"
  }
};
})();

(node as any).hash = "533a0d6c7b5ef8f978d8e55ab1edca0e";

export default node;
