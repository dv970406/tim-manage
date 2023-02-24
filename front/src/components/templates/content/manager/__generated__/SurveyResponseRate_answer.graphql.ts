/**
 * @generated SignedSource<<ae00619bdfe4c545ef05b14c28f5c1f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SurveyResponseRate_answer$data = {
  readonly responseRate: {
    readonly answeredEmployeeCount: number;
    readonly notAnsweredEmployeeCount: number;
  };
  readonly " $fragmentType": "SurveyResponseRate_answer";
};
export type SurveyResponseRate_answer$key = {
  readonly " $data"?: SurveyResponseRate_answer$data;
  readonly " $fragmentSpreads": FragmentRefs<"SurveyResponseRate_answer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SurveyResponseRate_answer",
  "selections": [
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
    }
  ],
  "type": "Survey",
  "abstractKey": null
};

(node as any).hash = "533786fb67aa90518a28e6b6d5de2a72";

export default node;
