/**
 * @generated SignedSource<<56db3743309150eac6c2bce7a5ebd4db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableContent_survey$data = {
  readonly id: string;
  readonly isAnonymous: boolean;
  readonly surveyTitle: string;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "TableContent_survey";
};
export type TableContent_survey$key = {
  readonly " $data"?: TableContent_survey$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableContent_survey">;
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
  "name": "TableContent_survey",
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
    }
  ],
  "type": "Survey",
  "abstractKey": null
};
})();

(node as any).hash = "2648b4a34f2d395cb55021a892a683a4";

export default node;
