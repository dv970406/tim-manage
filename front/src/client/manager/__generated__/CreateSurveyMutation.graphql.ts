/**
 * @generated SignedSource<<ed99b34b06ad36c8b98408e18515b1be>>
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
    readonly error: string | null;
    readonly ok: boolean;
    readonly survey: {
      readonly isAnonymous: boolean;
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
    } | null;
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
v1 = [
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
  "name": "isAnonymous",
  "storageKey": null
},
v5 = {
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "surveyTitle",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSurveyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSurveyOutput",
        "kind": "LinkedField",
        "name": "createSurvey",
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
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSurveyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSurveyOutput",
        "kind": "LinkedField",
        "name": "createSurvey",
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
    "cacheID": "727b3a18a48a7edc777f3b52ebb877c4",
    "id": null,
    "metadata": {},
    "name": "CreateSurveyMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSurveyMutation(\n  $isAnonymous: Boolean!\n  $paragraphs: [SurveyFormInputType!]!\n  $surveyTitle: String!\n) {\n  createSurvey(input: {isAnonymous: $isAnonymous, paragraphs: $paragraphs, surveyTitle: $surveyTitle}) {\n    ok\n    error\n    survey {\n      isAnonymous\n      paragraphs {\n        paragraphTitle\n        description\n        multipleChoice\n      }\n      surveyTitle\n      user {\n        id\n        name\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c431859f2a41174de3a7f1520472c73";

export default node;
