/**
 * @generated SignedSource<<6f9f1fe0849fb6782f1ad4da50daf876>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NotificationTableContent_notification$data = {
  readonly confirmedByWho: {
    readonly id: string;
    readonly name: string;
  };
  readonly confirmedVacation: {
    readonly confirmed: {
      readonly byCeo: boolean;
      readonly byLeader: boolean;
      readonly byManager: boolean;
    };
    readonly createdAt: any;
    readonly duration: number;
    readonly endDate: any;
    readonly id: string;
    readonly startDate: any;
  };
  readonly id: string;
  readonly isRead: boolean;
  readonly " $fragmentType": "NotificationTableContent_notification";
};
export type NotificationTableContent_notification$key = {
  readonly " $data"?: NotificationTableContent_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"NotificationTableContent_notification">;
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
  "name": "NotificationTableContent_notification",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Vacation",
      "kind": "LinkedField",
      "name": "confirmedVacation",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startDate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endDate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "duration",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Confirm",
          "kind": "LinkedField",
          "name": "confirmed",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "byCeo",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "byLeader",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "byManager",
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "confirmedByWho",
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
      "name": "isRead",
      "storageKey": null
    }
  ],
  "type": "Notification",
  "abstractKey": null
};
})();

(node as any).hash = "58848d43527b2650372c7fd52fe8ada0";

export default node;
