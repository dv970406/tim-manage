/**
 * @generated SignedSource<<e5fa8a5ab85969a0215684be6c2a47f0>>
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
v2 = [
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
    "selections": (v2/*: any*/),
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
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "faa1b0479306e786fd8f21762d0d8ea3",
    "id": null,
    "metadata": {},
    "name": "CreateAnswerMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAnswerMutation(\n  $surveyId: ID!\n  $results: [String!]!\n) {\n  createAnswer(input: {surveyId: $surveyId, results: $results}) {\n    ok\n    error\n    surveyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "db426c37f64bcaa6c8b77dc475482459";

export default node;
