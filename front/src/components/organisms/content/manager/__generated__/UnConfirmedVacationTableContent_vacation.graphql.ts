/**
 * @generated SignedSource<<d53608e5758d291035349534d4049fc7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UnConfirmedVacationTableContent_vacation$data = {
  readonly duration: number;
  readonly endDate: any;
  readonly id: string;
  readonly isHalf: boolean;
  readonly startDate: any;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "UnConfirmedVacationTableContent_vacation";
};
export type UnConfirmedVacationTableContent_vacation$key = {
  readonly " $data"?: UnConfirmedVacationTableContent_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"UnConfirmedVacationTableContent_vacation">;
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
  "name": "UnConfirmedVacationTableContent_vacation",
  "selections": [
    (v0/*: any*/),
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
    }
  ],
  "type": "Vacation",
  "abstractKey": null
};
})();

(node as any).hash = "043843b2c755c4424fb98973d677ca23";

export default node;
