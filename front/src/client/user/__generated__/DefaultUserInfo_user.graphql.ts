/**
 * @generated SignedSource<<8ab2d77d413be288cd6a5419d7aff7eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DefaultUserInfo_user$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "DefaultUserInfo_user";
};
export type DefaultUserInfo_user$key = {
  readonly " $data"?: DefaultUserInfo_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"DefaultUserInfo_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DefaultUserInfo_user",
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

(node as any).hash = "99079757503b2a89b71b682aaede7558";

export default node;
