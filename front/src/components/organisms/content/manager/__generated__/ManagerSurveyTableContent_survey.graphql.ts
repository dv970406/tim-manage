/**
 * @generated SignedSource<<20416a455fda7d8d324956aea83c24f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagerSurveyTableContent_survey$data = {
  readonly createdAt: any;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Survey",
  "abstractKey": null
};

(node as any).hash = "faf57d3453139bfc6bba7935428c4dac";

export default node;
