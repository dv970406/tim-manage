/**
 * @generated SignedSource<<a52571332756f8e2bfa1343997fee4b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerSurveysQuery$variables = {
  onlyMine?: boolean | null;
};
export type GetManagerSurveysQuery$data = {
  readonly getSurveys: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly surveys: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ManagerSurveyTableContent_survey">;
    }> | null;
  };
};
export type GetManagerSurveysQuery = {
  response: GetManagerSurveysQuery$data;
  variables: GetManagerSurveysQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "onlyMine"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "onlyMine",
        "variableName": "onlyMine"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerSurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetSurveysOutput",
        "kind": "LinkedField",
        "name": "getSurveys",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerSurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetSurveysOutput",
        "kind": "LinkedField",
        "name": "getSurveys",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "cacheID": "903bda9d5ed16a9fd38e7d6dde46bc69",
    "id": null,
    "metadata": {},
    "name": "GetManagerSurveysQuery",
    "operationKind": "query",
    "text": "query GetManagerSurveysQuery(\n  $onlyMine: Boolean\n) {\n  getSurveys(input: {onlyMine: $onlyMine}) {\n    ok\n    error\n    surveys {\n      ...ManagerSurveyTableContent_survey\n      id\n    }\n  }\n}\n\nfragment ManagerSurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n}\n"
  }
};
})();

(node as any).hash = "e26a546c234cf2c475574ed3cac2d2f5";

export default node;
