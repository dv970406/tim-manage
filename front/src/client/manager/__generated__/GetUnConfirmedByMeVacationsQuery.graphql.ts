/**
 * @generated SignedSource<<5f73c15d1a53908619f7ba2881bf03db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetUnConfirmedByMeVacationsQuery$variables = {};
export type GetUnConfirmedByMeVacationsQuery$data = {
  readonly getUnConfirmedByMeVacations: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly vacations: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"UnConfirmedVacationTableContent_vacation">;
    }> | null;
  };
};
export type GetUnConfirmedByMeVacationsQuery = {
  response: GetUnConfirmedByMeVacationsQuery$data;
  variables: GetUnConfirmedByMeVacationsQuery$variables;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUnConfirmedByMeVacationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUnConfirmedByMeVacationsOutput",
        "kind": "LinkedField",
        "name": "getUnConfirmedByMeVacations",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Vacation",
            "kind": "LinkedField",
            "name": "vacations",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UnConfirmedVacationTableContent_vacation"
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
    "name": "GetUnConfirmedByMeVacationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUnConfirmedByMeVacationsOutput",
        "kind": "LinkedField",
        "name": "getUnConfirmedByMeVacations",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Vacation",
            "kind": "LinkedField",
            "name": "vacations",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
                "kind": "ScalarField",
                "name": "duration",
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
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
  },
  "params": {
    "cacheID": "f17fba3829f49dadeb4297af78e9dd98",
    "id": null,
    "metadata": {},
    "name": "GetUnConfirmedByMeVacationsQuery",
    "operationKind": "query",
    "text": "query GetUnConfirmedByMeVacationsQuery {\n  getUnConfirmedByMeVacations {\n    ok\n    error\n    vacations {\n      ...UnConfirmedVacationTableContent_vacation\n      id\n    }\n  }\n}\n\nfragment UnConfirmedVacationTableContent_vacation on Vacation {\n  id\n  startDate\n  endDate\n  duration\n  isHalf\n  user {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "8a5cccd4b784b631e640e18f17de65d1";

export default node;
