/**
 * @generated SignedSource<<c7b26abc6a645c4ff028d978178648ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoomTableContent_room$data = {
  readonly id: string;
  readonly unreadCount: number;
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "RoomTableContent_room";
};
export type RoomTableContent_room$key = {
  readonly " $data"?: RoomTableContent_room$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoomTableContent_room">;
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
  "name": "RoomTableContent_room",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "users",
      "plural": true,
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unreadCount",
      "storageKey": null
    }
  ],
  "type": "Room",
  "abstractKey": null
};
})();

(node as any).hash = "953bbca86f16c762903ab46f5156e76b";

export default node;
