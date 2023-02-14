/**
 * @generated SignedSource<<100ae8e4d37fdc633a30c6e7d6d5d378>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagerTeamTableContent_team$data = {
  readonly id: string;
  readonly team: string;
  readonly " $fragmentType": "ManagerTeamTableContent_team";
};
export type ManagerTeamTableContent_team$key = {
  readonly " $data"?: ManagerTeamTableContent_team$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagerTeamTableContent_team">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ManagerTeamTableContent_team",
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
      "name": "team",
      "storageKey": null
    }
  ],
  "type": "Team",
  "abstractKey": null
};

(node as any).hash = "b141b108575d6157c59e80ed85b5651f";

export default node;
