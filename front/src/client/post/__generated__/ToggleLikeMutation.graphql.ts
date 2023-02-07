/**
 * @generated SignedSource<<871e9f507822fc077bd8841190192d5a>>
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
v1 = [
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
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToggleLikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a0b291b0c6ab899a23f7a60c343d6926",
    "id": null,
    "metadata": {},
    "name": "ToggleLikeMutation",
    "operationKind": "mutation",
    "text": "mutation ToggleLikeMutation(\n  $postId: ID!\n) {\n  toggleLike(input: {postId: $postId}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "d6039747ed16b388d69d9680078e12e9";

export default node;
