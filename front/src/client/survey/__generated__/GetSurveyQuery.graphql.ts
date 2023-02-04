/**
 * @generated SignedSource<<c57a62475d723ccb0c132cf1f584319a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetSurveyQuery$variables = {
  id: string;
};
export type GetSurveyQuery$data = {
  readonly getSurvey: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly survey: {
      readonly " $fragmentSpreads": FragmentRefs<"AnswerSheet_survey">;
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AnswerSheet_survey"
              }
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
  },
  "params": {
    "cacheID": "23c0281dd76677e10eeb1b6ba2d70fa1",
    "id": null,
    "metadata": {},
    "name": "GetSurveyQuery",
    "operationKind": "query",
    "text": "query GetSurveyQuery(\n  $id: ID!\n) {\n  getSurvey(input: {id: $id}) {\n    ok\n    error\n    survey {\n      ...AnswerSheet_survey\n      id\n    }\n  }\n}\n\nfragment AnswerSheet_survey on Survey {\n  id\n  surveyTitle\n  paragraphs {\n    paragraphTitle\n    description\n    multipleChoice\n  }\n}\n"
  }
};
})();

(node as any).hash = "d861e47822fa5f61b1206ca621a020de";

export default node;
