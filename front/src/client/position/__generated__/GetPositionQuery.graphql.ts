/**
 * @generated SignedSource<<682850db64c1407d4d8cd3f9a4fad78b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetPositionQuery$variables = {
  id: string;
};
export type GetPositionQuery$data = {
  readonly getPosition: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly position: {
      readonly id: string;
      readonly position: string;
    } | null;
  };
};
export type GetPositionQuery = {
  response: GetPositionQuery$data;
  variables: GetPositionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "GetPositionOutput",
    "kind": "LinkedField",
    "name": "getPosition",
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
        "name": "position",
        "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPositionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetPositionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dee496078410424e193fdd2f71b20886",
    "id": null,
    "metadata": {},
    "name": "GetPositionQuery",
    "operationKind": "query",
    "text": "query GetPositionQuery(\n  $id: ID!\n) {\n  getPosition(input: {id: $id}) {\n    ok\n    error\n    position {\n      id\n      position\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "622d2f7fd6cec196d451fee088e16df8";

export default node;
