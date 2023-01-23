/**
 * @generated SignedSource<<5666a6e61bb392e4d884a39b741d486a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetUsersQuery$variables = {};
export type GetUsersQuery$data = {
  readonly getUsers: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly users: ReadonlyArray<{
      readonly email: string;
      readonly id: string;
      readonly name: string;
    }> | null;
  };
};
export type GetUsersQuery = {
  response: GetUsersQuery$data;
  variables: GetUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
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
            "name": "email",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8f56d496b1076231b9c607730d8c65cc",
    "id": null,
    "metadata": {},
    "name": "GetUsersQuery",
    "operationKind": "query",
    "text": "query GetUsersQuery {\n  getUsers {\n    ok\n    error\n    users {\n      id\n      name\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5bf8056e451ad644f7b86c30e803fa41";

export default node;
