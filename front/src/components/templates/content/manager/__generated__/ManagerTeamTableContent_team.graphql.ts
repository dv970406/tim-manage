/**
 * @generated SignedSource<<02162c538367c889f62d3b30c0018447>>
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
  readonly leader: {
    readonly id: string;
    readonly name: string;
  };
  readonly team: string;
  readonly " $fragmentType": "ManagerTeamTableContent_team";
};
export type ManagerTeamTableContent_team$key = {
  readonly " $data"?: ManagerTeamTableContent_team$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagerTeamTableContent_team">;
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
  "name": "ManagerTeamTableContent_team",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "team",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "leader",
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
  "type": "Team",
  "abstractKey": null
};
})();

(node as any).hash = "d5466b13f7143bb248923957b2123a5e";

export default node;
