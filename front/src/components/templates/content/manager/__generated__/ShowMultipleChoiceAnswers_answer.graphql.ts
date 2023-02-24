/**
 * @generated SignedSource<<df22b5c54f3e90cf686860c67d3f4c1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowMultipleChoiceAnswers_answer$data = {
  readonly multipleChoiceFormat: ReadonlyArray<{
    readonly chartFormatResults: {
      readonly labels: ReadonlyArray<string>;
      readonly series: ReadonlyArray<number>;
    };
    readonly description: string;
    readonly paragraphTitle: string;
  }>;
  readonly " $fragmentType": "ShowMultipleChoiceAnswers_answer";
};
export type ShowMultipleChoiceAnswers_answer$key = {
  readonly " $data"?: ShowMultipleChoiceAnswers_answer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowMultipleChoiceAnswers_answer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowMultipleChoiceAnswers_answer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MultipleChoiceFormat",
      "kind": "LinkedField",
      "name": "multipleChoiceFormat",
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
          "concreteType": "ChartFormatResult",
          "kind": "LinkedField",
          "name": "chartFormatResults",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "labels",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "series",
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

(node as any).hash = "de12c86a347bb18bb5c8aeefbcf86d22";

export default node;
