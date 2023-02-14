/**
 * @generated SignedSource<<5787ae6bb252b79e7e57bf6ff08541c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagerSurveyTableContent_survey$data = {
  readonly id: string;
  readonly isAnonymous: boolean;
  readonly surveyTitle: string;
  readonly " $fragmentType": "ManagerSurveyTableContent_survey";
};
export type ManagerSurveyTableContent_survey$key = {
  readonly " $data"?: ManagerSurveyTableContent_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagerSurveyTableContent_survey">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ManagerSurveyTableContent_survey",
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
      "kind": "ScalarField",
      "name": "isAnonymous",
      "storageKey": null
    }
  ],
  "type": "Survey",
  "abstractKey": null
};

(node as any).hash = "b57bf6eff88c7d2e74a6b125ac1c808e";

export default node;
