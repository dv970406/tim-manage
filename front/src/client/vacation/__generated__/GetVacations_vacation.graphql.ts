/**
 * @generated SignedSource<<4010ef0957fc6f6ea38842606fbe6a0d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetVacations_vacation$data = {
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
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "GetVacations_vacation";
};
export type GetVacations_vacation$key = {
  readonly " $data"?: GetVacations_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"GetVacations_vacation">;
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
  "name": "GetVacations_vacation",
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
          "name": "byLeader",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "byManager",
          "storageKey": null
        }
      ],
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
      "kind": "ScalarField",
      "name": "duration",
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

(node as any).hash = "e9a92a2391a10a0e3171970cc9e2dde6";

export default node;
