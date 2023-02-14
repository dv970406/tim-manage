/**
 * @generated SignedSource<<825100256ad13cc68b851da6b163ab06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserVacations_vacation$data = {
  readonly availableVacation: string;
  readonly vacations: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ShowUserVacationsHistory_vacation">;
  }>;
  readonly " $fragmentType": "ShowUserVacations_vacation";
};
export type ShowUserVacations_vacation$key = {
  readonly " $data"?: ShowUserVacations_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserVacations_vacation">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowUserVacations_vacation",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availableVacation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Vacation",
      "kind": "LinkedField",
      "name": "vacations",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ShowUserVacationsHistory_vacation"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "3819a29ef441502462b2d77918eed7e6";

export default node;
