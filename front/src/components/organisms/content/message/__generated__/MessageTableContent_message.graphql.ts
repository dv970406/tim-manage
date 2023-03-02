/**
 * @generated SignedSource<<8be4e46dc606b2b35439cdaeaac7b53e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessageTableContent_message$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly isMine: boolean;
  readonly message: string;
  readonly user: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "MessageTableContent_message";
};
export type MessageTableContent_message$key = {
  readonly " $data"?: MessageTableContent_message$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessageTableContent_message">;
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
  "name": "MessageTableContent_message",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isMine",
      "storageKey": null
    }
  ],
  "type": "Message",
  "abstractKey": null
};
})();

(node as any).hash = "ed8273101d6804a3af783a53e0e31fa6";

export default node;
