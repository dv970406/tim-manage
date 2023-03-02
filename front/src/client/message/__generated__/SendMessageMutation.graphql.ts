/**
 * @generated SignedSource<<f0b90761bfb9109b7ff37873e1bba068>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SendMessageMutation$variables = {
  listenerId?: string | null;
  message: string;
  roomId?: string | null;
};
export type SendMessageMutation$data = {
  readonly sendMessage: {
    readonly edge: {
      readonly cursor: any;
      readonly node: {
        readonly createdAt: any;
        readonly id: string;
        readonly isMine: boolean;
        readonly message: string;
        readonly room: {
          readonly id: string;
        };
        readonly user: {
          readonly id: string;
          readonly name: string;
        };
      };
    } | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type SendMessageMutation = {
  response: SendMessageMutation$data;
  variables: SendMessageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "listenerId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "message"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "roomId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "listenerId",
            "variableName": "listenerId"
          },
          {
            "kind": "Variable",
            "name": "message",
            "variableName": "message"
          },
          {
            "kind": "Variable",
            "name": "roomId",
            "variableName": "roomId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SendMessageOutput",
    "kind": "LinkedField",
    "name": "sendMessage",
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
              (v3/*: any*/),
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
                "selections": [
                  (v3/*: any*/),
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
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "room",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SendMessageMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SendMessageMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "e2acb4537a675717f46c91ba7e65d1c7",
    "id": null,
    "metadata": {},
    "name": "SendMessageMutation",
    "operationKind": "mutation",
    "text": "mutation SendMessageMutation(\n  $message: String!\n  $roomId: ID\n  $listenerId: ID\n) {\n  sendMessage(input: {message: $message, roomId: $roomId, listenerId: $listenerId}) {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        isMine\n        message\n        user {\n          id\n          name\n        }\n        room {\n          id\n        }\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "40866d5d46cb90614f44a84288988e6f";

export default node;
