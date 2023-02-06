/**
 * @generated SignedSource<<4efff6ee50684f546c7750a09696d84c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnswerSheet_survey$data = {
  readonly id: string;
  readonly paragraphs: ReadonlyArray<{
    readonly description: string | null;
    readonly multipleChoice: ReadonlyArray<string>;
    readonly paragraphTitle: string;
  }>;
  readonly surveyTitle: string;
  readonly " $fragmentType": "AnswerSheet_survey";
};
export type AnswerSheet_survey$key = {
  readonly " $data"?: AnswerSheet_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"AnswerSheet_survey">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnswerSheet_survey",
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
  "type": "Survey",
  "abstractKey": null
};

(node as any).hash = "66e4f13a6b5702f335584edc4682c515";

export default node;
