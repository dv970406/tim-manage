/**
 * @generated SignedSource<<d376cf5898099d582b36bd20be0ccaac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetOrCreateRoomQuery$variables = {
  after?: any | null;
  first: number;
  roomId?: string | null;
  skip: boolean;
  userId?: string | null;
};
export type GetOrCreateRoomQuery$data = {
  readonly getOrCreateRoom?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly room: {
      readonly id: string;
      readonly unreadMessageCount: number;
      readonly users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
      readonly " $fragmentSpreads": FragmentRefs<"MessagesTable_message">;
    } | null;
  };
};
export type GetOrCreateRoomQuery = {
  response: GetOrCreateRoomQuery$data;
  variables: GetOrCreateRoomQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "roomId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v5 = [
  {
    "kind": "Variable",
    "name": "roomId",
    "variableName": "roomId"
  },
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "users",
  "plural": true,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unreadMessageCount",
  "storageKey": null
},
v12 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetOrCreateRoomQuery",
    "selections": [
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "GetOrCreateRoomOutput",
            "kind": "LinkedField",
            "name": "getOrCreateRoom",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "room",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "MessagesTable_message"
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetOrCreateRoomQuery",
    "selections": [
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "GetOrCreateRoomOutput",
            "kind": "LinkedField",
            "name": "getOrCreateRoom",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "room",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": (v12/*: any*/),
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
                              (v8/*: any*/),
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
                                "selections": (v9/*: any*/),
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
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "__typename",
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
                  },
                  {
                    "alias": null,
                    "args": (v12/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "MessagesTable_messagesOfRoomConnection",
                    "kind": "LinkedHandle",
                    "name": "messagesOfRoomConnection"
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "867b0e594360b19534d18adf2985e696",
    "id": null,
    "metadata": {},
    "name": "GetOrCreateRoomQuery",
    "operationKind": "query",
    "text": "query GetOrCreateRoomQuery(\n  $roomId: ID\n  $userId: ID\n  $skip: Boolean!\n  $first: Int!\n  $after: DateTime\n) {\n  getOrCreateRoom(roomId: $roomId, userId: $userId) @skip(if: $skip) {\n    ok\n    error\n    room {\n      id\n      ...MessagesTable_message\n      users {\n        id\n        name\n      }\n      unreadMessageCount\n    }\n  }\n}\n\nfragment MessageTableContent_message on Message {\n  id\n  message\n  user {\n    id\n    name\n  }\n  createdAt\n  isMine\n}\n\nfragment MessagesTable_message on Room {\n  messagesOfRoomConnection(first: $first, after: $after) {\n    edges {\n      node {\n        ...MessageTableContent_message\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "470fe5da79542e06b5b012364aa51f7a";

export default node;
