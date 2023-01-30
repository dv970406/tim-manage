/**
 * @generated SignedSource<<3c03006621a186b0daaf2dfeb6cffa17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetSurveysQuery$variables = {};
export type GetSurveysQuery$data = {
  readonly getSurveys: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly surveys: ReadonlyArray<{
      readonly id: string;
      readonly isAnonymous: boolean;
      readonly surveyTitle: string;
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    }> | null;
  };
};
export type GetSurveysQuery = {
  response: GetSurveysQuery$data;
  variables: GetSurveysQuery$variables;
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
    "concreteType": "GetSurveysOutput",
    "kind": "LinkedField",
    "name": "getSurveys",
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
        "concreteType": "Survey",
        "kind": "LinkedField",
        "name": "surveys",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "surveyTitle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAnonymous",
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
    "name": "GetSurveysQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetSurveysQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3264ea0daf1a4f3219beb7223ad80a29",
    "id": null,
    "metadata": {},
    "name": "GetSurveysQuery",
    "operationKind": "query",
    "text": "query GetSurveysQuery {\n  getSurveys {\n    ok\n    error\n    surveys {\n      id\n      surveyTitle\n      isAnonymous\n      user {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "46d0ec73a36e7263f49502bb9bdf7ee0";

export default node;
