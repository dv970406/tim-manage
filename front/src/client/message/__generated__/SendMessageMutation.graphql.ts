/**
 * @generated SignedSource<<a03d720470a9efc4a2b89a38a8d6d519>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SendMessageMutation$variables = {
  message: string;
  roomId: string;
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "message"
  },
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
        "fields": [
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
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "room",
                "plural": false,
                "selections": [
                  (v1/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SendMessageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SendMessageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7e9d12e477bbaef0b1d411878c9c9cd8",
    "id": null,
    "metadata": {},
    "name": "SendMessageMutation",
    "operationKind": "mutation",
    "text": "mutation SendMessageMutation(\n  $message: String!\n  $roomId: ID!\n) {\n  sendMessage(input: {message: $message, roomId: $roomId}) {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        isMine\n        message\n        user {\n          id\n          name\n        }\n        room {\n          id\n        }\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "df662560cc720cd547614cf9b1a94e3c";

export default node;
