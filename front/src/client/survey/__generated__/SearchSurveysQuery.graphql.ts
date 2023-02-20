/**
 * @generated SignedSource<<6f0280a7c6d76d7437fcca4815db656a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchSurveysQuery$variables = {
  keyword?: string | null;
};
export type SearchSurveysQuery$data = {
  readonly searchSurveys: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly surveyTitle: string;
      };
    }>;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type SearchSurveysQuery = {
  response: SearchSurveysQuery$data;
  variables: SearchSurveysQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "keyword"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "keyword",
            "variableName": "keyword"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SearchSurveysOutput",
    "kind": "LinkedField",
    "name": "searchSurveys",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchSurveysQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchSurveysQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2ca95b246983c238e416d9522a7ec44b",
    "id": null,
    "metadata": {},
    "name": "SearchSurveysQuery",
    "operationKind": "query",
    "text": "query SearchSurveysQuery(\n  $keyword: String\n) {\n  searchSurveys(input: {keyword: $keyword}) {\n    ok\n    error\n    edges {\n      node {\n        id\n        surveyTitle\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "68ec5d1d95d9d5a181ba803ca420d04f";

export default node;
