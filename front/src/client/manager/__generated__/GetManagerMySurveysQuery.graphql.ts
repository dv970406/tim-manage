/**
 * @generated SignedSource<<031b849d260d014ac31d00fa36f9ba89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerMySurveysQuery$variables = {};
export type GetManagerMySurveysQuery$data = {
  readonly getMySurveys: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly surveys: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ManagerSurveyTableContent_survey">;
    }> | null;
  };
};
export type GetManagerMySurveysQuery = {
  response: GetManagerMySurveysQuery$data;
  variables: GetManagerMySurveysQuery$variables;
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
    "name": "GetManagerMySurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetMySurveysOutput",
        "kind": "LinkedField",
        "name": "getMySurveys",
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
                "name": "ManagerSurveyTableContent_survey"
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
    "name": "GetManagerMySurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetMySurveysOutput",
        "kind": "LinkedField",
        "name": "getMySurveys",
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
                "name": "surveyTitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAnonymous",
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
    "cacheID": "6eb52ccbc4307ab498dcc3facb5d0a1e",
    "id": null,
    "metadata": {},
    "name": "GetManagerMySurveysQuery",
    "operationKind": "query",
    "text": "query GetManagerMySurveysQuery {\n  getMySurveys {\n    ok\n    error\n    surveys {\n      ...ManagerSurveyTableContent_survey\n      id\n    }\n  }\n}\n\nfragment ManagerSurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n}\n"
  }
};
})();

(node as any).hash = "cf913b20f12df13cc949e5af1e8316f5";

export default node;
