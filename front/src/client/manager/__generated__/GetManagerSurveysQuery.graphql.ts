/**
 * @generated SignedSource<<b16095aa2af8572f3e88bf3708655851>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerSurveysQuery$variables = {
  after?: any | null;
  first: number;
  onlyMine?: boolean | null;
};
export type GetManagerSurveysQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ManagerSurveysTable_survey">;
};
export type GetManagerSurveysQuery = {
  response: GetManagerSurveysQuery$data;
  variables: GetManagerSurveysQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onlyMine"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "onlyMine",
    "variableName": "onlyMine"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerSurveysQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "ManagerSurveysTable_survey"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetManagerSurveysQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
            "concreteType": "SurveyEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Survey",
                "kind": "LinkedField",
                "name": "node",
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
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "onlyMine"
        ],
        "handle": "connection",
        "key": "ManagerSurveysTable_getSurveys",
        "kind": "LinkedHandle",
        "name": "getSurveys"
      }
    ]
  },
  "params": {
    "cacheID": "3f89827f57ee927376fab048a477ff3d",
    "id": null,
    "metadata": {},
    "name": "GetManagerSurveysQuery",
    "operationKind": "query",
    "text": "query GetManagerSurveysQuery(\n  $onlyMine: Boolean\n  $first: Int!\n  $after: DateTime\n) {\n  ...ManagerSurveysTable_survey_2VsxLS\n}\n\nfragment ManagerSurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  createdAt\n}\n\nfragment ManagerSurveysTable_survey_2VsxLS on Query {\n  getSurveys(onlyMine: $onlyMine, first: $first, after: $after) {\n    ok\n    error\n    edges {\n      node {\n        ...ManagerSurveyTableContent_survey\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f8d6c0802951ad63ec3df00d2278b03";

export default node;
