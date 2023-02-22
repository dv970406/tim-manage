/**
 * @generated SignedSource<<4c1f9af4ff6c350794cc90f695ee6c3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersTable_user$data = {
  readonly getUsers: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"UserTableContent_user">;
      };
    }>;
    readonly error: string | null;
    readonly ok: boolean;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "UsersTable_user";
};
export type UsersTable_user$key = {
  readonly " $data"?: UsersTable_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsersTable_user">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "getUsers"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "keyword"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orders"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./UsersTablePaginationQuery.graphql')
    }
  },
  "name": "UsersTable_user",
  "selections": [
    {
      "alias": "getUsers",
      "args": [
        {
          "kind": "Variable",
          "name": "keyword",
          "variableName": "keyword"
        },
        {
          "kind": "Variable",
          "name": "orders",
          "variableName": "orders"
        }
      ],
      "concreteType": "GetUsersOutput",
      "kind": "LinkedField",
      "name": "__UsersTable_getUsers_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "UserTableContent_user"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "4e331daac6caf4af4c86a6af8cd1f524";

export default node;
