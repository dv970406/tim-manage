/**
 * @generated SignedSource<<efbf7d00468b7730550b32699fe2eb5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SelectUsersQuery$variables = {};
export type SelectUsersQuery$data = {
  readonly getUsers: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly users: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }> | null;
  };
};
export type SelectUsersQuery = {
  response: SelectUsersQuery$data;
  variables: SelectUsersQuery$variables;
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
    "name": "SelectUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5e55ca5f5d3a9ca2ffe3a172f5873e13",
    "id": null,
    "metadata": {},
    "name": "SelectUsersQuery",
    "operationKind": "query",
    "text": "query SelectUsersQuery {\n  getUsers {\n    ok\n    error\n    users {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e479ec0b7746cb589393c7c8c1e7cb9b";

export default node;
