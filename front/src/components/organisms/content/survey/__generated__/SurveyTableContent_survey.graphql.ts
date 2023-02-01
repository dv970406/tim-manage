/**
 * @generated SignedSource<<7a7d271c880612e86ba1f0c7e15437ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SurveyTableContent_survey$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly isAnonymous: boolean;
  readonly surveyTitle: string;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "SurveyTableContent_survey";
};
export type SurveyTableContent_survey$key = {
  readonly " $data"?: SurveyTableContent_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"SurveyTableContent_survey">;
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
  "name": "SurveyTableContent_survey",
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
      "name": "isAnonymous",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
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
})();

(node as any).hash = "dfb5712be1955185ee7ba33e864ad9ac";

export default node;
