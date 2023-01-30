/**
 * @generated SignedSource<<c8bcad275e016e68f1e08881bb59e59d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DefaultUserInfoFragment_user$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "DefaultUserInfoFragment_user";
};
export type DefaultUserInfoFragment_user$key = {
  readonly " $data"?: DefaultUserInfoFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"DefaultUserInfoFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DefaultUserInfoFragment_user",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "0291665344402f557b9b8a8871e2d8ce";

export default node;
