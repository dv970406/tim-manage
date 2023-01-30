/**
 * @generated SignedSource<<6c63cca9bec51d0637238b8b37e85e73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetUsersQuery$variables = {};
export type GetUsersQuery$data = {
  readonly getUsers: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly users: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TableContent_user">;
    }> | null;
  };
};
export type GetUsersQuery = {
  response: GetUsersQuery$data;
  variables: GetUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUsersOutput",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TableContent_user"
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUsersOutput",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Position",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "position",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Team",
                "kind": "LinkedField",
                "name": "team",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "team",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "joinDate",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0c15f53816bf92ffcd5c680afd2bd05",
    "id": null,
    "metadata": {},
    "name": "GetUsersQuery",
    "operationKind": "query",
    "text": "query GetUsersQuery {\n  getUsers {\n    ok\n    error\n    users {\n      ...TableContent_user\n      id\n    }\n  }\n}\n\nfragment TableContent_user on User {\n  id\n  name\n  email\n  position {\n    id\n    position\n  }\n  team {\n    id\n    team\n  }\n  joinDate\n}\n"
  }
};
})();

(node as any).hash = "36ccc74a0607dfda8bc15e817ed8d6e0";

export default node;
