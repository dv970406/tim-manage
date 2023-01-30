/**
 * @generated SignedSource<<ef59f62a6d64d9f9dafd816d0b56d77a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetPostQuery$variables = {
  id: string;
};
export type GetPostQuery$data = {
  readonly getPost: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly post: {
      readonly id: string;
      readonly title: string;
    } | null;
  };
};
export type GetPostQuery = {
  response: GetPostQuery$data;
  variables: GetPostQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "GetPostOutput",
    "kind": "LinkedField",
    "name": "getPost",
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
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
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
            "name": "title",
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
    "name": "GetPostQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetPostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f41dafe67953c7ef5166341edaa50a8",
    "id": null,
    "metadata": {},
    "name": "GetPostQuery",
    "operationKind": "query",
    "text": "query GetPostQuery(\n  $id: ID!\n) {\n  getPost(input: {id: $id}) {\n    ok\n    error\n    post {\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7d6c6934dd0807baf4d22c9904fe2aef";

export default node;
