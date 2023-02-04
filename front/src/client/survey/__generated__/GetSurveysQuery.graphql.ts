/**
 * @generated SignedSource<<a4b96b38f778c1a97f8a1db41828769f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetSurveysQuery$variables = {};
export type GetSurveysQuery$data = {
  readonly getSurveys: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly surveys: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"SurveyTableContent_survey">;
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
    "name": "GetSurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetSurveysOutput",
        "kind": "LinkedField",
        "name": "getSurveys",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "surveys",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SurveyTableContent_survey"
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
    "name": "GetSurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetSurveysOutput",
        "kind": "LinkedField",
        "name": "getSurveys",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "surveys",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAnswered",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
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
    "cacheID": "45f2ae6ff5efb62a10d35801c6b21208",
    "id": null,
    "metadata": {},
    "name": "GetSurveysQuery",
    "operationKind": "query",
    "text": "query GetSurveysQuery {\n  getSurveys {\n    ok\n    error\n    surveys {\n      ...SurveyTableContent_survey\n      id\n    }\n  }\n}\n\nfragment SurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  user {\n    id\n    name\n  }\n  isAnswered\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "8632e2c38d1a94aad67f089bfbc8a05a";

export default node;
