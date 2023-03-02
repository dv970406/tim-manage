/**
 * @generated SignedSource<<bb9ae4388e5f286270bdb8d58fa34d7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReadNotificationMutation$variables = {
  notificationId: string;
};
export type ReadNotificationMutation$data = {
  readonly readNotification: {
    readonly error: string | null;
    readonly notification: {
      readonly id: string;
    } | null;
    readonly ok: boolean;
  };
};
export type ReadNotificationMutation = {
  response: ReadNotificationMutation$data;
  variables: ReadNotificationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "notificationId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "notificationId",
            "variableName": "notificationId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "ReadReceiveNotificationOutput",
    "kind": "LinkedField",
    "name": "readNotification",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Notification",
        "kind": "LinkedField",
        "name": "notification",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReadNotificationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReadNotificationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0916dff7e86648d99f78d0b29d9015d2",
    "id": null,
    "metadata": {},
    "name": "ReadNotificationMutation",
    "operationKind": "mutation",
    "text": "mutation ReadNotificationMutation(\n  $notificationId: ID!\n) {\n  readNotification(input: {notificationId: $notificationId}) {\n    ok\n    error\n    notification {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "07def85cbe33b64a4dddecb0d0580c7a";

export default node;
