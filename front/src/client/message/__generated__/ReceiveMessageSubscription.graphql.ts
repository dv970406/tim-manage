/**
 * @generated SignedSource<<a3f1c01efcdc9aeff4f2296faeb70175>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type ReceiveMessageSubscription$variables = {};
export type ReceiveMessageSubscription$data = {
  readonly receiveMessage: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly room: {
      readonly id: string;
    } | null;
  };
};
export type ReceiveMessageSubscription = {
  response: ReceiveMessageSubscription$data;
  variables: ReceiveMessageSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReceiveMessageOutput",
    "kind": "LinkedField",
    "name": "receiveMessage",
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
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReceiveMessageSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReceiveMessageSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b6fb82b280143af152c7cf243fa3f38f",
    "id": null,
    "metadata": {},
    "name": "ReceiveMessageSubscription",
    "operationKind": "subscription",
    "text": "subscription ReceiveMessageSubscription {\n  receiveMessage {\n    ok\n    error\n    room {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "675cd012c7d677a0a6cef84a90195bc1";

export default node;
