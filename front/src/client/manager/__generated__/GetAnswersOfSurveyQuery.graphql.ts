/**
 * @generated SignedSource<<1fbe070dfbec8b85e286b2a73f84e823>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetAnswersOfSurveyQuery$variables = {
  skip: boolean;
  surveyId: string;
};
export type GetAnswersOfSurveyQuery$data = {
  readonly getAnswersOfSurvey?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly survey: {
      readonly " $fragmentSpreads": FragmentRefs<"ShowMultipleChoiceAnswers_answer" | "ShowShortAnswers_answer" | "SurveyResponseRate_answer">;
    } | null;
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
    "kind": "Variable",
    "name": "surveyId",
    "variableName": "surveyId"
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
  "name": "paragraphTitle",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
            "concreteType": "GetAnswersOfSurveyOutput",
            "kind": "LinkedField",
            "name": "getAnswersOfSurvey",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
                    "name": "ShowShortAnswers_answer"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ShowMultipleChoiceAnswers_answer"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SurveyResponseRate_answer"
                  }
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
            "concreteType": "GetAnswersOfSurveyOutput",
            "kind": "LinkedField",
            "name": "getAnswersOfSurvey",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
                    "name": "isAnonymous",
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
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ShortAnswersFormat",
                        "kind": "LinkedField",
                        "name": "shortAnswers",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "result",
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
                    "concreteType": "MultipleChoiceFormat",
                    "kind": "LinkedField",
                    "name": "multipleChoiceFormat",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
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
                  },
                  (v7/*: any*/)
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
    "cacheID": "f300acfbc0eaad1e4e706d6c04d828d2",
    "id": null,
    "metadata": {},
    "name": "GetAnswersOfSurveyQuery",
    "operationKind": "query",
    "text": "query GetAnswersOfSurveyQuery(\n  $surveyId: ID!\n  $skip: Boolean!\n) {\n  getAnswersOfSurvey(surveyId: $surveyId) @skip(if: $skip) {\n    ok\n    error\n    survey {\n      ...ShowShortAnswers_answer\n      ...ShowMultipleChoiceAnswers_answer\n      ...SurveyResponseRate_answer\n      id\n    }\n  }\n}\n\nfragment ShowMultipleChoiceAnswers_answer on Survey {\n  multipleChoiceFormat {\n    paragraphTitle\n    description\n    chartFormatResults {\n      labels\n      series\n    }\n  }\n}\n\nfragment ShowShortAnswers_answer on Survey {\n  isAnonymous\n  shortAnswerFormat {\n    paragraphTitle\n    description\n    shortAnswers {\n      result\n      user {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment SurveyResponseRate_answer on Survey {\n  responseRate {\n    notAnsweredEmployeeCount\n    answeredEmployeeCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "065a789f9235164a0d87564ab866cda3";

export default node;
