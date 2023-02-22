/**
 * @generated SignedSource<<91bad21c0219ccd0cecec9d1316d6f69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserAnswers_answer$data = {
  readonly id: string;
  readonly myAnswersConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: any;
      readonly node: {
        readonly id: string;
        readonly results: ReadonlyArray<string>;
        readonly survey: {
          readonly " $fragmentSpreads": FragmentRefs<"SurveyTableContent_survey">;
        };
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: any | null;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "ShowUserAnswers_answer";
};
export type ShowUserAnswers_answer$key = {
  readonly " $data"?: ShowUserAnswers_answer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserAnswers_answer">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "myAnswersConnection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "keyword"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ShowUserAnswersPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ShowUserAnswers_answer",
  "selections": [
    {
      "alias": "myAnswersConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "keyword",
          "variableName": "keyword"
        }
      ],
      "concreteType": "AnswersConnection",
      "kind": "LinkedField",
      "name": "__ShowUserAnswers_myAnswersConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AnswerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Answer",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "results",
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "SurveyTableContent_survey"
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "9673a02cc1fd129eb4b998327a1dc140";

export default node;
