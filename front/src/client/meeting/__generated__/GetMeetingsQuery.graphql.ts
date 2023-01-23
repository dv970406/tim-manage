/**
 * @generated SignedSource<<c203bd3f03268844fa55919229b36ecb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetMeetingsQuery$variables = {};
export type GetMeetingsQuery$data = {
  readonly getMeetings: {
    readonly error: string | null;
    readonly meetings: ReadonlyArray<{
      readonly attendees: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
      readonly endTime: any;
      readonly host: {
        readonly id: string;
        readonly name: string;
      };
      readonly id: string;
      readonly startTime: any;
      readonly title: string;
    }> | null;
    readonly ok: boolean;
  };
};
export type GetMeetingsQuery = {
  response: GetMeetingsQuery$data;
  variables: GetMeetingsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetMeetingsOutput",
    "kind": "LinkedField",
    "name": "getMeetings",
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
        "concreteType": "Meeting",
        "kind": "LinkedField",
        "name": "meetings",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "attendees",
            "plural": true,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": (v1/*: any*/),
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
    "name": "GetMeetingsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetMeetingsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e8cc0a529e6c3aa6a66f929d64c3fc0e",
    "id": null,
    "metadata": {},
    "name": "GetMeetingsQuery",
    "operationKind": "query",
    "text": "query GetMeetingsQuery {\n  getMeetings {\n    ok\n    error\n    meetings {\n      id\n      title\n      startTime\n      endTime\n      attendees {\n        id\n        name\n      }\n      host {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "32bda76fb5d7a756fffb32080c5665d6";

export default node;
