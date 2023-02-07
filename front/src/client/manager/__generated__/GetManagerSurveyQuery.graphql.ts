/**
 * @generated SignedSource<<1e0481601984f3fd0eddc618004830c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetManagerSurveyQuery$variables = {
  id: string;
  skip: boolean;
};
export type GetManagerSurveyQuery$data = {
  readonly getSurvey?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly survey: {
      readonly id: string;
      readonly paragraphs: ReadonlyArray<{
        readonly description: string | null;
        readonly multipleChoice: ReadonlyArray<string>;
        readonly paragraphTitle: string;
      }>;
      readonly surveyTitle: string;
    } | null;
  };
};
export type GetManagerSurveyQuery = {
  response: GetManagerSurveyQuery$data;
  variables: GetManagerSurveyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
  }
],
v1 = [
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
                "name": "id",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "input"
          }
        ],
        "concreteType": "GetSurveyOutput",
        "kind": "LinkedField",
        "name": "getSurvey",
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
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "survey",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerSurveyQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerSurveyQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7cafdefe32d4791f723c03800350ce18",
    "id": null,
    "metadata": {},
    "name": "GetManagerSurveyQuery",
    "operationKind": "query",
    "text": "query GetManagerSurveyQuery(\n  $id: ID!\n  $skip: Boolean!\n) {\n  getSurvey(input: {id: $id}) @skip(if: $skip) {\n    ok\n    error\n    survey {\n      id\n      surveyTitle\n      paragraphs {\n        paragraphTitle\n        description\n        multipleChoice\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8e23d4176d5a72c3c03f7e01c0c85633";

export default node;
