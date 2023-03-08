/**
 * @generated SignedSource<<b7533304334af0cf9e56c459bb5504a1>>
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
    readonly edge: {
      readonly cursor: any | null;
      readonly node: {
        readonly id: string;
        readonly recentMessage: {
          readonly id: string;
          readonly message: string;
        } | null;
        readonly unreadMessageCount: number;
        readonly users: ReadonlyArray<{
          readonly id: string;
          readonly name: string;
        }>;
      };
    } | null;
    readonly error: string | null;
    readonly isMyAlarm: boolean | null;
    readonly ok: boolean;
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
  "name": "id",
  "storageKey": null
},
v1 = [
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
            "concreteType": "Room",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
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
                "name": "unreadMessageCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "kind": "LinkedField",
                "name": "recentMessage",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "message",
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
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReceiveMessageSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b0875550453e4b25378e56198d1ac34d",
    "id": null,
    "metadata": {},
    "name": "ReceiveMessageSubscription",
    "operationKind": "subscription",
    "text": "subscription ReceiveMessageSubscription {\n  receiveMessage {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        users {\n          id\n          name\n        }\n        unreadMessageCount\n        recentMessage {\n          id\n          message\n        }\n      }\n    }\n    isMyAlarm\n  }\n}\n"
  }
};
})();

(node as any).hash = "e67af2d764a743e78bb37d054030d6fa";

export default node;
