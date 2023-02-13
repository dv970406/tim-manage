/**
 * @generated SignedSource<<831cbcb9a6e516be8c67e8954dfdd62d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetPostsQuery$variables = {};
export type GetPostsQuery$data = {
  readonly getPosts: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly posts: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"PostTableContent_post">;
    }> | null;
  };
};
export type GetPostsQuery = {
  response: GetPostsQuery$data;
  variables: GetPostsQuery$variables;
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
    "name": "GetPostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetPostsOutput",
        "kind": "LinkedField",
        "name": "getPosts",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "posts",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PostTableContent_post"
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
    "name": "GetPostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetPostsOutput",
        "kind": "LinkedField",
        "name": "getPosts",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "posts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
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
                  (v2/*: any*/),
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
                "kind": "ScalarField",
                "name": "isLiked",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "countLikes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "countComments",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
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
    "cacheID": "9aa1fd780f90d0bd5e87c95c22f50fd8",
    "id": null,
    "metadata": {},
    "name": "GetPostsQuery",
    "operationKind": "query",
    "text": "query GetPostsQuery {\n  getPosts {\n    ok\n    error\n    posts {\n      ...PostTableContent_post\n      id\n    }\n  }\n}\n\nfragment PostTableContent_post on Post {\n  id\n  title\n  user {\n    id\n    name\n  }\n  isLiked\n  countLikes\n  countComments\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "180758ab58b9a31487aa5c169bc0690b";

export default node;
