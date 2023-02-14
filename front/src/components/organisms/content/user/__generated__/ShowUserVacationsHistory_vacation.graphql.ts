/**
 * @generated SignedSource<<71da979706d3bd0d470e3b55d15a3765>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserVacationsHistory_vacation$data = {
  readonly confirmed: {
    readonly byCeo: boolean;
    readonly byLeader: boolean;
    readonly byManager: boolean;
  };
  readonly duration: number;
  readonly endDate: any;
  readonly id: string;
  readonly isHalf: boolean;
  readonly startDate: any;
  readonly " $fragmentType": "ShowUserVacationsHistory_vacation";
};
export type ShowUserVacationsHistory_vacation$key = {
  readonly " $data"?: ShowUserVacationsHistory_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserVacationsHistory_vacation">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowUserVacationsHistory_vacation",
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
      "name": "startDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "duration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isHalf",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Confirm",
      "kind": "LinkedField",
      "name": "confirmed",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "byCeo",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "byManager",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "byLeader",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Vacation",
  "abstractKey": null
};

(node as any).hash = "339d8c65ab6c17c4ee9ca0233adecf0b";

export default node;
