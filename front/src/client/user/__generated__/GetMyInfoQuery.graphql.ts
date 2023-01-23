/**
 * @generated SignedSource<<72d667cf9be00d37b610bdf1bcdb7361>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetMyInfoQuery$variables = {};
export type GetMyInfoQuery$data = {
  readonly getMyInfo: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly email: string;
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type GetMyInfoQuery = {
  response: GetMyInfoQuery$data;
  variables: GetMyInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetUserOutput",
    "kind": "LinkedField",
    "name": "getMyInfo",
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
        "name": "user",
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
    "name": "GetMyInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetMyInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4725e2f90d38774c68c2928d6983fd47",
    "id": null,
    "metadata": {},
    "name": "GetMyInfoQuery",
    "operationKind": "query",
    "text": "query GetMyInfoQuery {\n  getMyInfo {\n    ok\n    error\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e761dc1987d54d522417e12f8bb15c05";

export default node;
