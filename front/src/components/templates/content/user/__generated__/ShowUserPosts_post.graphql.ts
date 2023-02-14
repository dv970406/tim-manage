/**
 * @generated SignedSource<<3d500a526a948f4313dccc6816300d67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserPosts_post$data = {
  readonly comments: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly post: {
      readonly " $fragmentSpreads": FragmentRefs<"PostTableContent_post">;
    };
  }>;
  readonly likes: ReadonlyArray<{
    readonly id: string;
    readonly post: {
      readonly " $fragmentSpreads": FragmentRefs<"PostTableContent_post">;
    };
  }>;
  readonly posts: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PostTableContent_post">;
  }>;
  readonly " $fragmentType": "ShowUserPosts_post";
};
export type ShowUserPosts_post$key = {
  readonly " $data"?: ShowUserPosts_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserPosts_post">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "PostTableContent_post"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Post",
  "kind": "LinkedField",
  "name": "post",
  "plural": false,
  "selections": (v0/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowUserPosts_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "posts",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Like",
      "kind": "LinkedField",
      "name": "likes",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
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
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "994d58158ff508bd4a5d2d05a341e737";

export default node;
