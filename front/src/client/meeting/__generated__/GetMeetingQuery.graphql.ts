/**
 * @generated SignedSource<<e20ec225ed9872bb1e849112a38d62fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetMeetingQuery$variables = {
  id: string;
};
export type GetMeetingQuery$data = {
  readonly getMeeting: {
    readonly error: string | null;
    readonly meeting: {
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
    } | null;
    readonly ok: boolean;
  };
};
export type GetMeetingQuery = {
  response: GetMeetingQuery$data;
  variables: GetMeetingQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "GetMeetingOutput",
    "kind": "LinkedField",
    "name": "getMeeting",
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
        "name": "meeting",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": (v2/*: any*/),
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
    "name": "GetMeetingQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetMeetingQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4360f6a73ed59cbdd0a01f78abcd8165",
    "id": null,
    "metadata": {},
    "name": "GetMeetingQuery",
    "operationKind": "query",
    "text": "query GetMeetingQuery(\n  $id: ID!\n) {\n  getMeeting(input: {id: $id}) {\n    ok\n    error\n    meeting {\n      id\n      title\n      startTime\n      endTime\n      attendees {\n        id\n        name\n      }\n      host {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "56dd5b6e1b2fbe581210998b8ae8c9e2";

export default node;
