/**
 * @generated SignedSource<<e838004be1e36fada9daef352a0b4fe0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Comment_comment$data = {
  readonly content: string;
  readonly createdAt: any;
  readonly id: string;
  readonly isMyComment: boolean;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "Comment_comment";
};
export type Comment_comment$key = {
  readonly " $data"?: Comment_comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Comment_comment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Comment_comment",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
      "name": "isMyComment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};
})();

(node as any).hash = "b4e9fe824f687afbcb43d42086fba258";

export default node;
