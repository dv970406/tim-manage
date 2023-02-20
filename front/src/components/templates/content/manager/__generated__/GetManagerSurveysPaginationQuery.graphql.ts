/**
 * @generated SignedSource<<1b376a3687548bc0cc737b75e19cf067>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerSurveysPaginationQuery$variables = {
  after?: any | null;
  first: number;
  onlyMine?: boolean | null;
};
export type GetManagerSurveysPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ManagerSurveysTable_survey">;
};
export type GetManagerSurveysPaginationQuery = {
  response: GetManagerSurveysPaginationQuery$data;
  variables: GetManagerSurveysPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "onlyMine"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerSurveysPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ManagerSurveysTable_survey"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerSurveysPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
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
    "cacheID": "7f70cd2d813395c6270bfde840e198c9",
    "id": null,
    "metadata": {},
    "name": "GetManagerSurveysPaginationQuery",
    "operationKind": "query",
    "text": "query GetManagerSurveysPaginationQuery(\n  $after: DateTime\n  $first: Int!\n  $onlyMine: Boolean\n) {\n  ...ManagerSurveysTable_survey_2VsxLS\n}\n\nfragment ManagerSurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  createdAt\n}\n\nfragment ManagerSurveysTable_survey_2VsxLS on Query {\n  getSurveys(onlyMine: $onlyMine, first: $first, after: $after) {\n    ok\n    error\n    edges {\n      node {\n        ...ManagerSurveyTableContent_survey\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "600e3b02b50c42af0890c680a4092f9c";

export default node;
