/**
 * @generated SignedSource<<59c477a6e0bf37810892c450d2ff6cec>>
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
    readonly post: {
      readonly content: string;
      readonly id: string;
      readonly title: string;
    } | null;
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
    "cacheID": "b7c6fbb3fdc7c2875e43e861c39ea419",
    "id": null,
    "metadata": {},
    "name": "UpdatePostMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePostMutation(\n  $postId: ID!\n  $title: String\n  $content: String\n) {\n  updatePost(input: {postId: $postId, title: $title, content: $content}) {\n    ok\n    error\n    post {\n      id\n      title\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b0fdb7652211e08618ac144ab57a046";

export default node;
