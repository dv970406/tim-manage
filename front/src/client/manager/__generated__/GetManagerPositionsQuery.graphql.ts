/**
 * @generated SignedSource<<c3286f88e24a5efc719035ba0e432d8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerPositionsQuery$variables = {};
export type GetManagerPositionsQuery$data = {
  readonly getPositions: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly positions: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ManagerPositionTableContent_position">;
    }> | null;
  };
};
export type GetManagerPositionsQuery = {
  response: GetManagerPositionsQuery$data;
  variables: GetManagerPositionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerPositionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetPositionsOutput",
        "kind": "LinkedField",
        "name": "getPositions",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Position",
            "kind": "LinkedField",
            "name": "positions",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ManagerPositionTableContent_position"
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetManagerPositionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetPositionsOutput",
        "kind": "LinkedField",
        "name": "getPositions",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Position",
            "kind": "LinkedField",
            "name": "positions",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ff0ba21be0078fda2cf663b575416516",
    "id": null,
    "metadata": {},
    "name": "GetManagerPositionsQuery",
    "operationKind": "query",
    "text": "query GetManagerPositionsQuery {\n  getPositions {\n    ok\n    error\n    positions {\n      ...ManagerPositionTableContent_position\n      id\n    }\n  }\n}\n\nfragment ManagerPositionTableContent_position on Position {\n  id\n  position\n}\n"
  }
};
})();

(node as any).hash = "3527ed791c539069470b0f21d700937b";

export default node;
