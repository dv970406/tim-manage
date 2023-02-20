/**
 * @generated SignedSource<<25da7627f4eef1896176d8fe60e63c49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ToggleLikeMutation$variables = {
  postId: string;
};
export type ToggleLikeMutation$data = {
  readonly toggleLike: {
    readonly error: string | null;
    readonly like: {
      readonly id: string;
      readonly post: {
        readonly id: string;
        readonly title: string;
      };
    } | null;
    readonly ok: boolean;
  };
};
export type ToggleLikeMutation = {
  response: ToggleLikeMutation$data;
  variables: ToggleLikeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "ToggleLikeOutput",
    "kind": "LinkedField",
    "name": "toggleLike",
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
        "concreteType": "Like",
        "kind": "LinkedField",
        "name": "like",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ToggleLikeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToggleLikeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a9740d12068dbdcdbaf31558976c7074",
    "id": null,
    "metadata": {},
    "name": "ToggleLikeMutation",
    "operationKind": "mutation",
    "text": "mutation ToggleLikeMutation(\n  $postId: ID!\n) {\n  toggleLike(input: {postId: $postId}) {\n    ok\n    error\n    like {\n      id\n      post {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c02c4af1fe16747bc8a9207e5a0828e4";

export default node;
