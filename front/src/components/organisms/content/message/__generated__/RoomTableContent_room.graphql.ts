/**
 * @generated SignedSource<<ee16b8484377c6d4fa1d4c82d6362da1>>
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
  readonly recentMessage: {
    readonly createdAt: any;
    readonly id: string;
    readonly message: string;
  } | null;
  readonly unreadMessageCount: number;
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
      "name": "unreadMessageCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Message",
      "kind": "LinkedField",
      "name": "recentMessage",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Room",
  "abstractKey": null
};
})();

(node as any).hash = "d12aa4f2f99b8b8ee65336e5ad4db385";

export default node;
