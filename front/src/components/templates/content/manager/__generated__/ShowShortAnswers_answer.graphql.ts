/**
 * @generated SignedSource<<6a02bf3aac52c0da63a0755f7cb1f89e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowShortAnswers_answer$data = {
  readonly isAnonymous: boolean;
  readonly shortAnswerFormat: ReadonlyArray<{
    readonly description: string;
    readonly paragraphTitle: string;
    readonly shortAnswers: ReadonlyArray<{
      readonly result: string;
      readonly user: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  }>;
  readonly " $fragmentType": "ShowShortAnswers_answer";
};
export type ShowShortAnswers_answer$key = {
  readonly " $data"?: ShowShortAnswers_answer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowShortAnswers_answer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowShortAnswers_answer",
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
    }
  ],
  "type": "Survey",
  "abstractKey": null
};

(node as any).hash = "2e5c31d27dd0ee35b0b458810224089f";

export default node;
