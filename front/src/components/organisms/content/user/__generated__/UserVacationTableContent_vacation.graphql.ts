/**
 * @generated SignedSource<<a7079f7ecef2cd0224c921069e47e805>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserVacationTableContent_vacation$data = {
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
  readonly " $fragmentType": "UserVacationTableContent_vacation";
};
export type UserVacationTableContent_vacation$key = {
  readonly " $data"?: UserVacationTableContent_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserVacationTableContent_vacation">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserVacationTableContent_vacation",
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

(node as any).hash = "4016164e5f168f6f8f80b2724b0bcf33";

export default node;
