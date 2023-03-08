/**
 * @generated SignedSource<<f78deadc93e45a214e7f5ce35896b9ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpeakableUserTableContent_user$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "SpeakableUserTableContent_user";
};
export type SpeakableUserTableContent_user$key = {
  readonly " $data"?: SpeakableUserTableContent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpeakableUserTableContent_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpeakableUserTableContent_user",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "db43cdeabcae7544edf63d793d912b40";

export default node;
