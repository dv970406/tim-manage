/**
 * @generated SignedSource<<a8403c815dfff1da27086f37f7b62af8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetVacationsQuery$variables = {};
export type GetVacationsQuery$data = {
  readonly getVacations: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly vacations: ReadonlyArray<{
      readonly confirmed: {
        readonly byCeo: boolean;
        readonly byLeader: boolean;
        readonly byManager: boolean;
      };
      readonly duration: number;
      readonly endDate: any;
      readonly id: string;
      readonly isHalf: boolean;
      readonly startDate: any;
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    }> | null;
  };
};
export type GetVacationsQuery = {
  response: GetVacationsQuery$data;
  variables: GetVacationsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetVacationsOutput",
    "kind": "LinkedField",
    "name": "getVacations",
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
        "concreteType": "Vacation",
        "kind": "LinkedField",
        "name": "vacations",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Confirm",
            "kind": "LinkedField",
            "name": "confirmed",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byCeo",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byLeader",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byManager",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isHalf",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "duration",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
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
    "name": "GetVacationsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetVacationsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "12a405120335eb61492c23690643665a",
    "id": null,
    "metadata": {},
    "name": "GetVacationsQuery",
    "operationKind": "query",
    "text": "query GetVacationsQuery {\n  getVacations {\n    ok\n    error\n    vacations {\n      id\n      startDate\n      endDate\n      confirmed {\n        byCeo\n        byLeader\n        byManager\n      }\n      isHalf\n      duration\n      user {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d848db024f72b0913f56a51e3395f617";

export default node;
