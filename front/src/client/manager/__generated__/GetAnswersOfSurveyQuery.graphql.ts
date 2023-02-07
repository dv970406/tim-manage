/**
 * @generated SignedSource<<fed98e2aba9ee9b902021cd89996ffb2>>
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
    readonly answers: ReadonlyArray<{
      readonly results: ReadonlyArray<string>;
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    }> | null;
    readonly error: string | null;
    readonly ok: boolean;
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
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "results",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetAnswersOfSurveyQuery",
    "selections": [
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "GetAnswersOfsurveyOutput",
            "kind": "LinkedField",
            "name": "getAnswersOfSurvey",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
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
    "selections": [
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "GetAnswersOfsurveyOutput",
            "kind": "LinkedField",
            "name": "getAnswersOfSurvey",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "231c87ab26c4bbd7d55dda64910adc49",
    "id": null,
    "metadata": {},
    "name": "GetAnswersOfSurveyQuery",
    "operationKind": "query",
    "text": "query GetAnswersOfSurveyQuery(\n  $surveyId: ID!\n  $skip: Boolean!\n) {\n  getAnswersOfSurvey(input: {surveyId: $surveyId}) @skip(if: $skip) {\n    ok\n    error\n    answers {\n      results\n      user {\n        id\n        name\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e626efc5951281912c31db4d1508c58";

export default node;
