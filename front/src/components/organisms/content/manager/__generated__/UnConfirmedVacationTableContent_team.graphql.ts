/**
 * @generated SignedSource<<5eba53adfee5e0e30199f4b3690da337>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UnConfirmedVacationTableContent_team$data = {
  readonly duration: number;
  readonly endDate: any;
  readonly id: string;
  readonly isHalf: boolean;
  readonly startDate: any;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "UnConfirmedVacationTableContent_team";
};
export type UnConfirmedVacationTableContent_team$key = {
  readonly " $data"?: UnConfirmedVacationTableContent_team$data;
  readonly " $fragmentSpreads": FragmentRefs<"UnConfirmedVacationTableContent_team">;
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
  "name": "UnConfirmedVacationTableContent_team",
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

(node as any).hash = "2d924f6917b70786583be504c1b16b9e";

export default node;
