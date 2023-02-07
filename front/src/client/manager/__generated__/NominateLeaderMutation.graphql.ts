/**
 * @generated SignedSource<<a2c25445203ca4cd2ed8f30b286fc11a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NominateLeaderMutation$variables = {
  id: string;
  userId: string;
};
export type NominateLeaderMutation$data = {
  readonly nominateLeader: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type NominateLeaderMutation = {
  response: NominateLeaderMutation$data;
  variables: NominateLeaderMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
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
            "name": "id",
            "variableName": "id"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "NominateLeaderOutput",
    "kind": "LinkedField",
    "name": "nominateLeader",
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
    "name": "NominateLeaderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NominateLeaderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dd543a7ff8790f5411c4abc28210fa54",
    "id": null,
    "metadata": {},
    "name": "NominateLeaderMutation",
    "operationKind": "mutation",
    "text": "mutation NominateLeaderMutation(\n  $id: ID!\n  $userId: ID!\n) {\n  nominateLeader(input: {id: $id, userId: $userId}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "9217e1368edc827784ad047b12ee37b0";

export default node;
