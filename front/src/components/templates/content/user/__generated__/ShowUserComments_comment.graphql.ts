/**
 * @generated SignedSource<<5aaa75c70d08484cd5ec4910b8ef3580>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserComments_comment$data = {
  readonly id: string;
  readonly myCommentsConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
        readonly content: string;
        readonly id: string;
        readonly post: {
          readonly " $fragmentSpreads": FragmentRefs<"PostTableContent_post">;
        };
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "ShowUserComments_comment";
};
export type ShowUserComments_comment$key = {
  readonly " $data"?: ShowUserComments_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserComments_comment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "myCommentsConnection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "keyword"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ShowUserCommentsPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ShowUserComments_comment",
  "selections": [
    {
      "alias": "myCommentsConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "keyword",
          "variableName": "keyword"
        }
      ],
      "concreteType": "CommentsConnection",
      "kind": "LinkedField",
      "name": "__ShowUserComments_myCommentsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Comment",
              "kind": "LinkedField",
              "name": "node",
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
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "PostTableContent_post"
                    }
                  ],
                  "storageKey": null
                },
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
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "a948e4d1fbe7d10d57fbadab9ad8ec16";

export default node;
