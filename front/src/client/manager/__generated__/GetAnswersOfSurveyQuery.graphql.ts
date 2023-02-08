/**
 * @generated SignedSource<<1222f4ab2617b986e1f72cc90080ca6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetAnswersOfSurveyQuery$variables = {
  skip: boolean;
  surveyId: string;
};
export type GetAnswersOfSurveyQuery$data = {
  readonly getAnswersOfSurvey?: {
    readonly error: string | null;
    readonly multipleChoiceFormat: ReadonlyArray<{
      readonly chartFormatResults: {
        readonly labels: ReadonlyArray<string>;
        readonly series: ReadonlyArray<number>;
      };
      readonly description: string;
      readonly paragraphTitle: string;
    }> | null;
    readonly ok: boolean;
    readonly responseRate: {
      readonly answeredEmployeeCount: number;
      readonly notAnsweredEmployeeCount: number;
    } | null;
    readonly shortAnswerFormat: ReadonlyArray<{
      readonly description: string;
      readonly paragraphTitle: string;
      readonly shortAnswers: ReadonlyArray<string>;
    }> | null;
  };
};
export type GetAnswersOfSurveyQuery = {
  response: GetAnswersOfSurveyQuery$data;
  variables: GetAnswersOfSurveyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "surveyId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "paragraphTitle",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = [
  {
    "condition": "skip",
    "kind": "Condition",
    "passingValue": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "surveyId",
                "variableName": "surveyId"
              }
            ],
            "kind": "ObjectValue",
            "name": "input"
          }
        ],
        "concreteType": "GetAnswersOfsurveyOutput",
        "kind": "LinkedField",
        "name": "getAnswersOfSurvey",
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
            "concreteType": "ShortAnswerFormat",
            "kind": "LinkedField",
            "name": "shortAnswerFormat",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "shortAnswers",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MultipleChoiceFormat",
            "kind": "LinkedField",
            "name": "multipleChoiceFormat",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ChartFormatResult",
                "kind": "LinkedField",
                "name": "chartFormatResults",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "labels",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "series",
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
            "args": null,
            "concreteType": "ResponseRate",
            "kind": "LinkedField",
            "name": "responseRate",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "notAnsweredEmployeeCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "answeredEmployeeCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetAnswersOfSurveyQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetAnswersOfSurveyQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "5e8e19589dab70c6c006caa8598c4d65",
    "id": null,
    "metadata": {},
    "name": "GetAnswersOfSurveyQuery",
    "operationKind": "query",
    "text": "query GetAnswersOfSurveyQuery(\n  $surveyId: ID!\n  $skip: Boolean!\n) {\n  getAnswersOfSurvey(input: {surveyId: $surveyId}) @skip(if: $skip) {\n    ok\n    error\n    shortAnswerFormat {\n      paragraphTitle\n      description\n      shortAnswers\n    }\n    multipleChoiceFormat {\n      paragraphTitle\n      description\n      chartFormatResults {\n        labels\n        series\n      }\n    }\n    responseRate {\n      notAnsweredEmployeeCount\n      answeredEmployeeCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e8fd4f9910d29ab2ca9dd52f06cc9aa0";

export default node;
