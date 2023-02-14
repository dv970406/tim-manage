/**
 * @generated SignedSource<<e025a691048a8a3e2a6c7edcf8172f00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowMultipleChoiceAnswers_survey$data = {
  readonly id: string;
  readonly paragraphs: ReadonlyArray<{
    readonly description: string | null;
    readonly multipleChoice: ReadonlyArray<string>;
    readonly paragraphTitle: string;
  }>;
  readonly surveyTitle: string;
  readonly " $fragmentType": "ShowMultipleChoiceAnswers_survey";
};
export type ShowMultipleChoiceAnswers_survey$key = {
  readonly " $data"?: ShowMultipleChoiceAnswers_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowMultipleChoiceAnswers_survey">;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: "Fragment",
  metadata: null,
  name: "ShowMultipleChoiceAnswers_survey",
  selections: [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "surveyTitle",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      concreteType: "SurveyForm",
      kind: "LinkedField",
      name: "paragraphs",
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "paragraphTitle",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "multipleChoice",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ],
  type: "Survey",
  abstractKey: null,
};

(node as any).hash = "041c895efe342f71d2c3e9bc47ba863d";

export default node;
