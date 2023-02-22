/**
 * @generated SignedSource<<9998082b534b1abe961ebcfe575bee10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserLikes_like$data = {
  readonly id: string;
  readonly myLikesConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
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
  readonly " $fragmentType": "ShowUserLikes_like";
};
export type ShowUserLikes_like$key = {
  readonly " $data"?: ShowUserLikes_like$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserLikes_like">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "myLikesConnection"
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
      "operation": require('./ShowUserLikesPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ShowUserLikes_like",
  "selections": [
    {
      "alias": "myLikesConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "keyword",
          "variableName": "keyword"
        }
      ],
      "concreteType": "LikesConnection",
      "kind": "LinkedField",
      "name": "__ShowUserLikes_myLikesConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LikeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Like",
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

(node as any).hash = "57ab872b4096988b488cae27c366542e";

export default node;
