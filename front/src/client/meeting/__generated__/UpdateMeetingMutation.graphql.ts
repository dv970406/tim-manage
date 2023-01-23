/**
 * @generated SignedSource<<44c2fd6ab45a58c8e7bc79f9c476b1b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateMeetingMutation$variables = {
  attendeesIds?: ReadonlyArray<string> | null;
  endTime?: any | null;
  meetingId: string;
  startTime?: any | null;
  title?: string | null;
};
export type UpdateMeetingMutation$data = {
  readonly updateMeeting: {
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
export type UpdateMeetingMutation = {
  response: UpdateMeetingMutation$data;
  variables: UpdateMeetingMutation$variables;
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
  "name": "meetingId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startTime"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v7 = [
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
            "name": "meetingId",
            "variableName": "meetingId"
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
    "concreteType": "UpdateMeetingOutput",
    "kind": "LinkedField",
    "name": "updateMeeting",
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
          (v5/*: any*/),
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
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": (v6/*: any*/),
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateMeetingMutation",
    "selections": (v7/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateMeetingMutation",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "2935472aa2cd1db03164cfed0c761b6d",
    "id": null,
    "metadata": {},
    "name": "UpdateMeetingMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateMeetingMutation(\n  $meetingId: ID!\n  $title: String\n  $startTime: DateTime\n  $endTime: DateTime\n  $attendeesIds: [ID!]\n) {\n  updateMeeting(input: {meetingId: $meetingId, title: $title, startTime: $startTime, endTime: $endTime, attendeesIds: $attendeesIds}) {\n    ok\n    error\n    meeting {\n      id\n      title\n      startTime\n      endTime\n      attendees {\n        id\n        name\n      }\n      host {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2433dbca7200a617eef6144e52f6bdd";

export default node;
