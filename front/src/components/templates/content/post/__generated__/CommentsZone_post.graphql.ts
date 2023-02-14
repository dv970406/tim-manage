/**
 * @generated SignedSource<<0da87dfd4b8777fa25574d5b4529b2b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentsZone_post$data = {
  readonly comments: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"Comment_comment">;
  }>;
  readonly " $fragmentType": "CommentsZone_post";
};
export type CommentsZone_post$key = {
  readonly " $data"?: CommentsZone_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentsZone_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentsZone_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Comment_comment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "3fbf20a55e66e4ac2a273ef3d39f8563";

export default node;
