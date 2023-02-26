/**
 * @generated SignedSource<<34eacc9642073b2be75b0be5c0fa8412>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoomsTable_room$data = {
  readonly getRooms: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any | null;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RoomTableContent_room">;
      };
    }> | null;
    readonly error: string | null;
    readonly ok: boolean;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    } | null;
  };
  readonly " $fragmentType": "RoomsTable_room";
};
export type RoomsTable_room$key = {
  readonly " $data"?: RoomsTable_room$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoomsTable_room">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "getRooms"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./RoomsTablePaginationQuery.graphql')
    }
  },
  "name": "RoomsTable_room",
  "selections": [
    {
      "alias": "getRooms",
      "args": null,
      "concreteType": "GetRoomsOutput",
      "kind": "LinkedField",
      "name": "__RoomsTable_getRooms_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "ok",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "error",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "RoomEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Room",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RoomTableContent_room"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "7d63522c33f39de45c5a8cd95a07ebd8";

export default node;
