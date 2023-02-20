/**
 * @generated SignedSource<<656ba6f2589066bfc789c5a991240dc7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetSurveysPaginationQuery$variables = {
  after?: any | null;
  first: number;
  keyword?: string | null;
  onlyMine?: boolean | null;
};
export type GetSurveysPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SurveysTable_survey">;
};
export type GetSurveysPaginationQuery = {
  response: GetSurveysPaginationQuery$data;
  variables: GetSurveysPaginationQuery$variables;
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
    "name": "keyword"
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
    "name": "keyword",
    "variableName": "keyword"
  },
  {
    "kind": "Variable",
    "name": "onlyMine",
    "variableName": "onlyMine"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetSurveysPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "SurveysTable_survey"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetSurveysPaginationQuery",
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
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
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
          "onlyMine",
          "keyword"
        ],
        "handle": "connection",
        "key": "SurveysTable_getSurveys",
        "kind": "LinkedHandle",
        "name": "getSurveys"
      }
    ]
  },
  "params": {
    "cacheID": "dc724fa28f94e4722b9b2067a0f7102f",
    "id": null,
    "metadata": {},
    "name": "GetSurveysPaginationQuery",
    "operationKind": "query",
    "text": "query GetSurveysPaginationQuery(\n  $after: DateTime\n  $first: Int!\n  $keyword: String\n  $onlyMine: Boolean\n) {\n  ...SurveysTable_survey_2PJsN0\n}\n\nfragment SurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  user {\n    id\n    name\n  }\n  isAnswered\n  createdAt\n}\n\nfragment SurveysTable_survey_2PJsN0 on Query {\n  getSurveys(onlyMine: $onlyMine, keyword: $keyword, first: $first, after: $after) {\n    ok\n    error\n    edges {\n      node {\n        ...SurveyTableContent_survey\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6f8a3a5a2056d6f8b4ce2e9eb7dd26a1";

export default node;
