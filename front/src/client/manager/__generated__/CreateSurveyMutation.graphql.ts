/**
 * @generated SignedSource<<bd7a4bd8c63f86f1e8093f42cd95d6bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SurveyFormInputType = {
  description?: string | null;
  multipleChoice: ReadonlyArray<string>;
  paragraphTitle: string;
};
export type CreateSurveyMutation$variables = {
  isAnonymous: boolean;
  paragraphs: ReadonlyArray<SurveyFormInputType>;
  surveyTitle: string;
};
export type CreateSurveyMutation$data = {
  readonly createSurvey: {
    readonly edge: {
      readonly cursor: any;
      readonly node: {
        readonly createdAt: any;
        readonly id: string;
        readonly isAnonymous: boolean;
        readonly isAnswered: boolean;
        readonly paragraphs: ReadonlyArray<{
          readonly description: string | null;
          readonly multipleChoice: ReadonlyArray<string>;
          readonly paragraphTitle: string;
        }>;
        readonly surveyTitle: string;
        readonly user: {
          readonly id: string;
          readonly name: string;
        };
      };
    };
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type CreateSurveyMutation = {
  response: CreateSurveyMutation$data;
  variables: CreateSurveyMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isAnonymous"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "paragraphs"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "surveyTitle"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "isAnonymous",
            "variableName": "isAnonymous"
          },
          {
            "kind": "Variable",
            "name": "paragraphs",
            "variableName": "paragraphs"
          },
          {
            "kind": "Variable",
            "name": "surveyTitle",
            "variableName": "surveyTitle"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateSurveyOutput",
    "kind": "LinkedField",
    "name": "createSurvey",
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
        "name": "edge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
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
    "name": "CreateSurveyMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSurveyMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d45a6fe3cc338d24b5b2829acde2c049",
    "id": null,
    "metadata": {},
    "name": "CreateSurveyMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSurveyMutation(\n  $isAnonymous: Boolean!\n  $paragraphs: [SurveyFormInputType!]!\n  $surveyTitle: String!\n) {\n  createSurvey(input: {isAnonymous: $isAnonymous, paragraphs: $paragraphs, surveyTitle: $surveyTitle}) {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        surveyTitle\n        isAnonymous\n        paragraphs {\n          paragraphTitle\n          description\n          multipleChoice\n        }\n        user {\n          id\n          name\n        }\n        isAnswered\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb0454c9744cd982e3dff96d2bc8a56d";

export default node;
