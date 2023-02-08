/**
 * @generated SignedSource<<3dc062dfbb87d02d7940a630ab5f5b48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetPostQuery$variables = {
  id: string;
};
export type GetPostQuery$data = {
  readonly getPost: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly post: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"CommentsZone_post" | "ContentZone_post" | "MutatePostForm_post">;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetPostOutput",
        "kind": "LinkedField",
        "name": "getPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommentsZone_post"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContentZone_post"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MutatePostForm_post"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetPostOutput",
        "kind": "LinkedField",
        "name": "getPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "comments",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isMyComment",
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isMyPost",
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
    "cacheID": "e0d2a7a2b484c5971978a9b6e04a4cde",
    "id": null,
    "metadata": {},
    "name": "GetPostQuery",
    "operationKind": "query",
    "text": "query GetPostQuery(\n  $id: ID!\n) {\n  getPost(input: {id: $id}) {\n    ok\n    error\n    post {\n      id\n      ...CommentsZone_post\n      ...ContentZone_post\n      ...MutatePostForm_post\n    }\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  user {\n    id\n    name\n  }\n  isMyComment\n  createdAt\n}\n\nfragment CommentsZone_post on Post {\n  comments {\n    ...Comment_comment\n    id\n  }\n}\n\nfragment ContentZone_post on Post {\n  title\n  content\n  user {\n    id\n    name\n  }\n  createdAt\n  isMyPost\n  isLiked\n  countLikes\n  countComments\n}\n\nfragment MutatePostForm_post on Post {\n  title\n  content\n  user {\n    id\n    name\n  }\n  createdAt\n  isMyPost\n}\n"
  }
};
})();

(node as any).hash = "6f05054250918d0d0751a75c2618fbba";

export default node;
