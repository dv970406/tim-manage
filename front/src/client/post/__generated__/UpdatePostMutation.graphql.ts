/**
 * @generated SignedSource<<9c9432cb075ba833a7b69989ff5e057a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdatePostMutation$variables = {
  content?: string | null;
  postId: string;
  title?: string | null;
};
export type UpdatePostMutation$data = {
  readonly updatePost: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type UpdatePostMutation = {
  response: UpdatePostMutation$data;
  variables: UpdatePostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "postId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
          },
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdatePostOutput",
    "kind": "LinkedField",
    "name": "updatePost",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePostMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdatePostMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9a91658d86ba009cf5d26cd0ca29c681",
    "id": null,
    "metadata": {},
    "name": "UpdatePostMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePostMutation(\n  $postId: ID!\n  $title: String\n  $content: String\n) {\n  updatePost(input: {postId: $postId, title: $title, content: $content}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "e7604ef71ab84114226f27d00409bc8e";

export default node;
