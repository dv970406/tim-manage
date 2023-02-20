/**
 * @generated SignedSource<<b91caffee3d4cb660807a595e8209f82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateCommentMutation$variables = {
  content: string;
  postId: string;
};
export type CreateCommentMutation$data = {
  readonly createComment: {
    readonly comment: {
      readonly content: string;
      readonly createdAt: any;
      readonly id: string;
      readonly isMyComment: boolean;
      readonly post: {
        readonly id: string;
        readonly title: string;
      };
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    } | null;
    readonly error: string | null;
    readonly ok: boolean;
    readonly postId: string | null;
  };
};
export type CreateCommentMutation = {
  response: CreateCommentMutation$data;
  variables: CreateCommentMutation$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
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
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateCommentOutput",
    "kind": "LinkedField",
    "name": "createComment",
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
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "comment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isMyComment",
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
              (v2/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postId",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCommentMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateCommentMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b8e599af50bd989fdf472bc587586583",
    "id": null,
    "metadata": {},
    "name": "CreateCommentMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCommentMutation(\n  $postId: ID!\n  $content: String!\n) {\n  createComment(input: {postId: $postId, content: $content}) {\n    ok\n    error\n    comment {\n      id\n      content\n      user {\n        id\n        name\n      }\n      createdAt\n      isMyComment\n      post {\n        id\n        title\n      }\n    }\n    postId\n  }\n}\n"
  }
};
})();

(node as any).hash = "635470ef8fff59d53ca43b8d34481511";

export default node;
