/**
 * @generated SignedSource<<6b47bae778cbddb16cf4d0193b8b65bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagerPositionTableContent_position$data = {
  readonly id: string;
  readonly position: string;
  readonly " $fragmentType": "ManagerPositionTableContent_position";
};
export type ManagerPositionTableContent_position$key = {
  readonly " $data"?: ManagerPositionTableContent_position$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagerPositionTableContent_position">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ManagerPositionTableContent_position",
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
      "name": "position",
      "storageKey": null
    }
  ],
  "type": "Position",
  "abstractKey": null
};

(node as any).hash = "1135f8a1808ab66631606a6e681ac5eb";

export default node;
