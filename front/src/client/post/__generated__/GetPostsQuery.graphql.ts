/**
 * @generated SignedSource<<d29b888fbf7a78ba3c0e02dbee49fa7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetPostsQuery$variables = {};
export type GetPostsQuery$data = {
  readonly getPosts: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly posts: ReadonlyArray<{
      readonly id: string;
      readonly title: string;
    }> | null;
  };
};
export type GetPostsQuery = {
  response: GetPostsQuery$data;
  variables: GetPostsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetPostsOutput",
    "kind": "LinkedField",
    "name": "getPosts",
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
        "name": "posts",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPostsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetPostsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0e03c31003a272514253b784f74896fd",
    "id": null,
    "metadata": {},
    "name": "GetPostsQuery",
    "operationKind": "query",
    "text": "query GetPostsQuery {\n  getPosts {\n    ok\n    error\n    posts {\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "89f373a9c5b05bee53a749cc953101e8";

export default node;
