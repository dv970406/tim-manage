/**
 * @generated SignedSource<<90e528069dd1a76e0669e9c2f37889c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetRoomQuery$variables = {
  roomId: string;
  skip: boolean;
};
export type GetRoomQuery$data = {
  readonly getRoom?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly room: {
      readonly id: string;
      readonly messagesOfRoomConnection: {
        readonly edges: ReadonlyArray<{
          readonly cursor: any;
          readonly node: {
            readonly id: string;
            readonly message: string;
          };
        }>;
        readonly pageInfo: {
          readonly endCursor: any | null;
          readonly hasNextPage: boolean;
        };
      };
      readonly users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    } | null;
  };
};
export type GetRoomQuery = {
  response: GetRoomQuery$data;
  variables: GetRoomQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "roomId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
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
    "condition": "skip",
    "kind": "Condition",
    "passingValue": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "roomId",
            "variableName": "roomId"
          }
        ],
        "concreteType": "GetRoomOutput",
        "kind": "LinkedField",
        "name": "getRoom",
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
            "concreteType": "Room",
            "kind": "LinkedField",
            "name": "room",
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
                "concreteType": "MessagesConnection",
                "kind": "LinkedField",
                "name": "messagesOfRoomConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
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
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
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
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetRoomQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetRoomQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8cb63132aebf94969d50169131f79c2e",
    "id": null,
    "metadata": {},
    "name": "GetRoomQuery",
    "operationKind": "query",
    "text": "query GetRoomQuery(\n  $roomId: ID!\n  $skip: Boolean!\n) {\n  getRoom(roomId: $roomId) @skip(if: $skip) {\n    ok\n    error\n    room {\n      id\n      users {\n        id\n        name\n      }\n      messagesOfRoomConnection {\n        edges {\n          node {\n            id\n            message\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "02b5688063681f239f7da88fdc97a003";

export default node;
