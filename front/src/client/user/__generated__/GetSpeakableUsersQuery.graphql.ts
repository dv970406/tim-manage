/**
 * @generated SignedSource<<9a6b7168bcae7146d918f83134f82c92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetSpeakableUsersQuery$variables = {
  after?: any | null;
  first: number;
  keyword?: string | null;
};
export type GetSpeakableUsersQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SpeakableUsersTable_user">;
};
export type GetSpeakableUsersQuery = {
  response: GetSpeakableUsersQuery$data;
  variables: GetSpeakableUsersQuery$variables;
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
  "name": "keyword"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "keyword",
    "variableName": "keyword"
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
    "name": "GetSpeakableUsersQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "SpeakableUsersTable_user"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetSpeakableUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "GetUsersOutput",
        "kind": "LinkedField",
        "name": "getUsers",
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
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
        "args": (v3/*: any*/),
        "filters": [
          "keyword"
        ],
        "handle": "connection",
        "key": "SpeakableUsers_getUsers",
        "kind": "LinkedHandle",
        "name": "getUsers"
      }
    ]
  },
  "params": {
    "cacheID": "f9ac4f7f68aa85a2e83df96c63b020c5",
    "id": null,
    "metadata": {},
    "name": "GetSpeakableUsersQuery",
    "operationKind": "query",
    "text": "query GetSpeakableUsersQuery(\n  $keyword: String\n  $first: Int!\n  $after: DateTime\n) {\n  ...SpeakableUsersTable_user_3aPcrv\n}\n\nfragment SpeakableUserTableContent_user on User {\n  id\n  name\n}\n\nfragment SpeakableUsersTable_user_3aPcrv on Query {\n  getUsers(keyword: $keyword, first: $first, after: $after) {\n    ok\n    error\n    edges {\n      node {\n        ...SpeakableUserTableContent_user\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "73d2021832e7fe8301a2b69a1f929835";

export default node;
