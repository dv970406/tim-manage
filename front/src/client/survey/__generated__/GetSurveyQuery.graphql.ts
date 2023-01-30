/**
 * @generated SignedSource<<7a76a92ff02eb30c7f0d3731d46a247f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetSurveyQuery$variables = {
  id: string;
};
export type GetSurveyQuery$data = {
  readonly getSurvey: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly survey: {
      readonly answers: ReadonlyArray<{
        readonly results: ReadonlyArray<string>;
        readonly user: {
          readonly id: string;
          readonly name: string;
        };
      }>;
      readonly isAnonymous: boolean;
      readonly paragraphs: ReadonlyArray<{
        readonly description: string | null;
        readonly multipleChoice: ReadonlyArray<string> | null;
        readonly paragraphTitle: string;
      }>;
      readonly surveyTitle: string;
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    } | null;
  };
};
export type GetSurveyQuery = {
  response: GetSurveyQuery$data;
  variables: GetSurveyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "surveyTitle",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAnonymous",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v7/*: any*/),
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "results",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetSurveyQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetSurveyOutput",
        "kind": "LinkedField",
        "name": "getSurvey",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetSurveyQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetSurveyOutput",
        "kind": "LinkedField",
        "name": "getSurvey",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0ca9978027a8109a0ada1cbcf848b965",
    "id": null,
    "metadata": {},
    "name": "GetSurveyQuery",
    "operationKind": "query",
    "text": "query GetSurveyQuery(\n  $id: ID!\n) {\n  getSurvey(input: {id: $id}) {\n    ok\n    error\n    survey {\n      surveyTitle\n      isAnonymous\n      paragraphs {\n        paragraphTitle\n        description\n        multipleChoice\n      }\n      answers {\n        user {\n          id\n          name\n        }\n        results\n        id\n      }\n      user {\n        id\n        name\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20a64fbfc71ec8cf846e5b82894678be";

export default node;
