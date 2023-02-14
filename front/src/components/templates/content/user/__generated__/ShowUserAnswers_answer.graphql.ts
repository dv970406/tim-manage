/**
 * @generated SignedSource<<166927fe2407d5c51951168004a04662>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserAnswers_answer$data = {
  readonly answers: ReadonlyArray<{
    readonly id: string;
    readonly results: ReadonlyArray<string>;
    readonly survey: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"SurveyTableContent_survey">;
    };
  }>;
  readonly " $fragmentType": "ShowUserAnswers_answer";
};
export type ShowUserAnswers_answer$key = {
  readonly " $data"?: ShowUserAnswers_answer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserAnswers_answer">;
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
  "name": "ShowUserAnswers_answer",
  "selections": [
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Survey",
          "kind": "LinkedField",
          "name": "survey",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SurveyTableContent_survey"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "1d9b75468ea7ee9fdbe10de5f0c33ac0";

export default node;
