/**
 * @generated SignedSource<<2d0c9040800d764ecf90e9b8e58e36d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SurveysTablePaginationQuery$variables = {
  after?: any | null;
  first: number;
  keyword?: string | null;
  onlyMine?: boolean | null;
};
export type SurveysTablePaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SurveysTable_survey">;
};
export type SurveysTablePaginationQuery = {
  response: SurveysTablePaginationQuery$data;
  variables: SurveysTablePaginationQuery$variables;
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
    "name": "SurveysTablePaginationQuery",
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
    "name": "SurveysTablePaginationQuery",
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
    "cacheID": "be543b1a0ae0212ab9e5c7e4280e6944",
    "id": null,
    "metadata": {},
    "name": "SurveysTablePaginationQuery",
    "operationKind": "query",
    "text": "query SurveysTablePaginationQuery(\n  $after: DateTime\n  $first: Int!\n  $keyword: String\n  $onlyMine: Boolean\n) {\n  ...SurveysTable_survey_2PJsN0\n}\n\nfragment SurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  user {\n    id\n    name\n  }\n  isAnswered\n  createdAt\n}\n\nfragment SurveysTable_survey_2PJsN0 on Query {\n  getSurveys(onlyMine: $onlyMine, keyword: $keyword, first: $first, after: $after) {\n    ok\n    error\n    edges {\n      node {\n        ...SurveyTableContent_survey\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "097f4012050e3ed395a2386f0deef3f7";

export default node;
