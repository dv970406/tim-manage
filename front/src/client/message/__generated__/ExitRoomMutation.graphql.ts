/**
 * @generated SignedSource<<0cfaa6620d7f379ae96d1712170801d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ExitRoomMutation$variables = {
  roomId: string;
};
export type ExitRoomMutation$data = {
  readonly exitRoom: {
    readonly deletedRoomId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type ExitRoomMutation = {
  response: ExitRoomMutation$data;
  variables: ExitRoomMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "roomId"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "roomId",
        "variableName": "roomId"
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
  "name": "deletedRoomId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExitRoomMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ExitRoomOutput",
        "kind": "LinkedField",
        "name": "exitRoom",
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
    "name": "ExitRoomMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ExitRoomOutput",
        "kind": "LinkedField",
        "name": "exitRoom",
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
            "name": "deletedRoomId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "173bcedf7dabff0503548fdae6b37ba8",
    "id": null,
    "metadata": {},
    "name": "ExitRoomMutation",
    "operationKind": "mutation",
    "text": "mutation ExitRoomMutation(\n  $roomId: ID!\n) {\n  exitRoom(input: {roomId: $roomId}) {\n    ok\n    error\n    deletedRoomId\n  }\n}\n"
  }
};
})();

(node as any).hash = "96cff6ee4a46cd74184e0a61dc68b303";

export default node;
