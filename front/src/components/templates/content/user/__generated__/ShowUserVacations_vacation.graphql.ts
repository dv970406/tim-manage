/**
 * @generated SignedSource<<61aad4f946a7d0007f096e5fa1dc44fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserVacations_vacation$data = {
  readonly availableVacation: string;
  readonly id: string;
  readonly myVacationsConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"UserVacationTableContent_vacation">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "ShowUserVacations_vacation";
};
export type ShowUserVacations_vacation$key = {
  readonly " $data"?: ShowUserVacations_vacation$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserVacations_vacation">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "myVacationsConnection"
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
      "operation": require('./ShowUserVacationsPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ShowUserVacations_vacation",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availableVacation",
      "storageKey": null
    },
    {
      "alias": "myVacationsConnection",
      "args": null,
      "concreteType": "VacationsConnection",
      "kind": "LinkedField",
      "name": "__ShowUserVacations_myVacationsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VacationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Vacation",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "UserVacationTableContent_vacation"
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
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "26f51f67ba74c836aad952e28418b1a9";

export default node;
