/**
 * @generated SignedSource<<0a2e26a9be06dfb647af4b0d1c743ba1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowUserSurveys_survey$data = {
  readonly answers: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly surveys: ReadonlyArray<{
    readonly id: string;
    readonly surveyTitle: string;
  }>;
  readonly " $fragmentType": "ShowUserSurveys_survey";
};
export type ShowUserSurveys_survey$key = {
  readonly " $data"?: ShowUserSurveys_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowUserSurveys_survey">;
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
  "name": "ShowUserSurveys_survey",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Survey",
      "kind": "LinkedField",
      "name": "surveys",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "surveyTitle",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "ede3ef6ec039ec00ef5cbb885dd42855";

export default node;
