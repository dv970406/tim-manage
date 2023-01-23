/**
 * @generated SignedSource<<fede08f91aa338eb169dd2f982d47408>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserMutation$variables = {
  email: string;
  isManager: boolean;
  joinDate: any;
  name: string;
  positionId: string;
  teamId: string;
};
export type CreateUserMutation$data = {
  readonly createUser: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type CreateUserMutation = {
  response: CreateUserMutation$data;
  variables: CreateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isManager"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "joinDate"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "positionId"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamId"
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "isManager",
            "variableName": "isManager"
          },
          {
            "kind": "Variable",
            "name": "joinDate",
            "variableName": "joinDate"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "positionId",
            "variableName": "positionId"
          },
          {
            "kind": "Variable",
            "name": "teamId",
            "variableName": "teamId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateUserOutput",
    "kind": "LinkedField",
    "name": "createUser",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserMutation",
    "selections": (v6/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateUserMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "2213330520f22d6abe4c403107b46587",
    "id": null,
    "metadata": {},
    "name": "CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateUserMutation(\n  $email: String!\n  $isManager: Boolean!\n  $name: String!\n  $joinDate: DateTime!\n  $positionId: ID!\n  $teamId: ID!\n) {\n  createUser(input: {email: $email, isManager: $isManager, name: $name, joinDate: $joinDate, positionId: $positionId, teamId: $teamId}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "606871cc3259d6b9eb6f0e92f90c4991";

export default node;
