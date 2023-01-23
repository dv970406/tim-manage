/**
 * @generated SignedSource<<1da6faedc2f9c271012ad458f0c294b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateMeetingMutation$variables = {
  attendeesIds: ReadonlyArray<string>;
  endTime: any;
  startTime: any;
  title: string;
};
export type CreateMeetingMutation$data = {
  readonly createMeeting: {
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
export type CreateMeetingMutation = {
  response: CreateMeetingMutation$data;
  variables: CreateMeetingMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "attendeesIds"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "endTime"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startTime"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v6 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "attendeesIds",
            "variableName": "attendeesIds"
          },
          {
            "kind": "Variable",
            "name": "endTime",
            "variableName": "endTime"
          },
          {
            "kind": "Variable",
            "name": "startTime",
            "variableName": "startTime"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateMeetingOutput",
    "kind": "LinkedField",
    "name": "createMeeting",
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
          (v4/*: any*/),
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
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": (v5/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMeetingMutation",
    "selections": (v6/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateMeetingMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "238ce271931db01e701c40acf98fb950",
    "id": null,
    "metadata": {},
    "name": "CreateMeetingMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMeetingMutation(\n  $title: String!\n  $startTime: DateTime!\n  $endTime: DateTime!\n  $attendeesIds: [ID!]!\n) {\n  createMeeting(input: {title: $title, startTime: $startTime, endTime: $endTime, attendeesIds: $attendeesIds}) {\n    ok\n    error\n    meeting {\n      id\n      title\n      startTime\n      endTime\n      attendees {\n        id\n        name\n      }\n      host {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82376984031b71b360ce94165ab3902d";

export default node;
