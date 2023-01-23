/**
 * @generated SignedSource<<a7a236d389fb2b30b02c92cc38290b91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMeetingMutation$variables = {
  id: string;
};
export type DeleteMeetingMutation$data = {
  readonly deleteMeeting: {
    readonly deletedMeetingId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeleteMeetingMutation = {
  response: DeleteMeetingMutation$data;
  variables: DeleteMeetingMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedMeetingId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteMeetingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteMeetingOutput",
        "kind": "LinkedField",
        "name": "deleteMeeting",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteMeetingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteMeetingOutput",
        "kind": "LinkedField",
        "name": "deleteMeeting",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedMeetingId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6ae685b669e0721eb029fef18f62380b",
    "id": null,
    "metadata": {},
    "name": "DeleteMeetingMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMeetingMutation(\n  $id: ID!\n) {\n  deleteMeeting(input: {id: $id}) {\n    ok\n    error\n    deletedMeetingId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e5191fee7a64b6c36726fef1706bfdd6";

export default node;
