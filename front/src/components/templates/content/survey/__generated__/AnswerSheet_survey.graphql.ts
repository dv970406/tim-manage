/**
 * @generated SignedSource<<9cd28153a7bbfa2d1e7fa5aafe5dda08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnswerSheet_survey$data = {
  readonly answers: ReadonlyArray<{
    readonly id: string;
    readonly results: ReadonlyArray<string>;
  }>;
  readonly id: string;
  readonly isAnswered: boolean;
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

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnswerSheet_survey",
  "selections": [
    (v0/*: any*/),
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
      "name": "isAnswered",
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
      "concreteType": "Answer",
      "kind": "LinkedField",
      "name": "answers",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "results",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Survey",
  "abstractKey": null
};
})();

(node as any).hash = "3ef18cad48f79c841768cc491e08cdba";

export default node;
