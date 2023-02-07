/**
 * @generated SignedSource<<06b3a06ff7e00d250f207da07bb476e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetManagerPositionQuery$variables = {
  id: string;
  skip: boolean;
};
export type GetManagerPositionQuery$data = {
  readonly getPosition?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly position: {
      readonly id: string;
      readonly position: string;
      readonly users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    } | null;
  };
};
export type GetManagerPositionQuery = {
  response: GetManagerPositionQuery$data;
  variables: GetManagerPositionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "condition": "skip",
    "kind": "Condition",
    "passingValue": false,
    "selections": [
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerPositionQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerPositionQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5c6f7054f546f88b4110ec1dab1ae29f",
    "id": null,
    "metadata": {},
    "name": "GetManagerPositionQuery",
    "operationKind": "query",
    "text": "query GetManagerPositionQuery(\n  $id: ID!\n  $skip: Boolean!\n) {\n  getPosition(input: {id: $id}) @skip(if: $skip) {\n    ok\n    error\n    position {\n      id\n      position\n      users {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "27a3993366f7c0f72ea113e6a225de3d";

export default node;
