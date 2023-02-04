/**
 * @generated SignedSource<<0e2336c997e8099fbdf3dd436fb6992d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetKingOfMeetingQuery$variables = {};
export type GetKingOfMeetingQuery$data = {
  readonly getKingOfMeeting: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly users: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }> | null;
  };
};
export type GetKingOfMeetingQuery = {
  response: GetKingOfMeetingQuery$data;
  variables: GetKingOfMeetingQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetKingOfMeetingOutput",
    "kind": "LinkedField",
    "name": "getKingOfMeeting",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
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
    "name": "GetKingOfMeetingQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetKingOfMeetingQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cf7a2ef7cb16039399b6682da1027ada",
    "id": null,
    "metadata": {},
    "name": "GetKingOfMeetingQuery",
    "operationKind": "query",
    "text": "query GetKingOfMeetingQuery {\n  getKingOfMeeting {\n    ok\n    error\n    users {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "de7acf57bf10cb46b5abdf1f21f9d2d0";

export default node;
