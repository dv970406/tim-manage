/**
 * @generated SignedSource<<9b549e147476860f405ddadd535d436e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessagesTable_message$data = {
  readonly id: string;
  readonly messagesOfRoomConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"MessageTableContent_message">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "MessagesTable_message";
};
export type MessagesTable_message$key = {
  readonly " $data"?: MessagesTable_message$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessagesTable_message">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "messagesOfRoomConnection"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
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
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./MessagesTablePaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "MessagesTable_message",
  "selections": [
    {
      "alias": "messagesOfRoomConnection",
      "args": null,
      "concreteType": "MessagesConnection",
      "kind": "LinkedField",
      "name": "__MessagesTable_messagesOfRoomConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MessageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Message",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MessageTableContent_message"
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Room",
  "abstractKey": null
};
})();

(node as any).hash = "522768d31981c7d803b72ac77a03362e";

export default node;
