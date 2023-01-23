/**
 * @generated SignedSource<<9df358b68a78a577cb6bfdee36bf57ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetPositionsQuery$variables = {};
export type GetPositionsQuery$data = {
  readonly getPositions: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly positions: ReadonlyArray<{
      readonly id: string;
      readonly position: string;
    }> | null;
  };
};
export type GetPositionsQuery = {
  response: GetPositionsQuery$data;
  variables: GetPositionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetPositionsOutput",
    "kind": "LinkedField",
    "name": "getPositions",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPositionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetPositionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8c679ef1afd2a79c7def399c93a561f4",
    "id": null,
    "metadata": {},
    "name": "GetPositionsQuery",
    "operationKind": "query",
    "text": "query GetPositionsQuery {\n  getPositions {\n    ok\n    error\n    positions {\n      id\n      position\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c82e10c00148f3cd4c5c9fd68466d443";

export default node;
