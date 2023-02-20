/**
 * @generated SignedSource<<8ca2503e195904eeb9f03e32fbc54c8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateAnswerMutation$variables = {
  results: ReadonlyArray<string>;
  surveyId: string;
};
export type CreateAnswerMutation$data = {
  readonly createAnswer: {
    readonly answer: {
      readonly id: string;
      readonly results: ReadonlyArray<string>;
      readonly survey: {
        readonly answers: ReadonlyArray<{
          readonly id: string;
          readonly results: ReadonlyArray<string>;
        }>;
        readonly id: string;
        readonly isAnswered: boolean;
        readonly paragraphs: ReadonlyArray<{
          readonly description: string | null;
          readonly multipleChoice: ReadonlyArray<string>;
          readonly paragraphTitle: string;
        }>;
        readonly surveyTitle: string;
      };
    } | null;
    readonly error: string | null;
    readonly ok: boolean;
    readonly surveyId: string | null;
  };
};
export type CreateAnswerMutation = {
  response: CreateAnswerMutation$data;
  variables: CreateAnswerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "results"
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "results",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "results",
            "variableName": "results"
          },
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
    "concreteType": "CreateAnswerOutput",
    "kind": "LinkedField",
    "name": "createAnswer",
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
        "concreteType": "Answer",
        "kind": "LinkedField",
        "name": "answer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "survey",
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
                "name": "isAnswered",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SurveyForm",
                "kind": "LinkedField",
                "name": "paragraphs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paragraphTitle",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "multipleChoice",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
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
        "kind": "ScalarField",
        "name": "surveyId",
        "storageKey": null
      }
    ],
    "storageKey": null
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
    "name": "CreateAnswerMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateAnswerMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "5676285c48464e747cea27c79aa050f9",
    "id": null,
    "metadata": {},
    "name": "CreateAnswerMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAnswerMutation(\n  $surveyId: ID!\n  $results: [String!]!\n) {\n  createAnswer(input: {surveyId: $surveyId, results: $results}) {\n    ok\n    error\n    answer {\n      id\n      results\n      survey {\n        id\n        surveyTitle\n        isAnswered\n        paragraphs {\n          paragraphTitle\n          description\n          multipleChoice\n        }\n        answers {\n          id\n          results\n        }\n      }\n    }\n    surveyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "82fa555f477e97f91bf36ff8393ddcb2";

export default node;
