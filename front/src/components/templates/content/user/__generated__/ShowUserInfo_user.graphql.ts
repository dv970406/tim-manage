/**
 * @generated SignedSource<<74a3e17d0cd854da927004d881256edf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserInfo_user$data = {
  readonly availableVacation: string;
  readonly email: string;
  readonly id: string;
  readonly isManager: boolean;
  readonly joinDate: any;
  readonly name: string;
  readonly position: {
    readonly id: string;
    readonly position: string;
  };
  readonly team: {
    readonly id: string;
    readonly team: string;
  };
  readonly " $fragmentType": "ShowUserInfo_user";
};
export type ShowUserInfo_user$key = {
  readonly " $data"?: ShowUserInfo_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserInfo_user">;
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
  "name": "ShowUserInfo_user",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isManager",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joinDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Position",
      "kind": "LinkedField",
      "name": "position",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "position",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Team",
      "kind": "LinkedField",
      "name": "team",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "team",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availableVacation",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "aa1dc4917de4b8bad93a2a4629adbd03";

export default node;
