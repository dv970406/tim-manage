/**
 * @generated SignedSource<<bbbc0b3330799ff9051f128a7ea488de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserMutation$variables = {
  availableVacation?: number | null;
  email?: string | null;
  isManager?: boolean | null;
  joinDate?: any | null;
  name?: string | null;
  positionId?: string | null;
  teamId?: string | null;
  userId: string;
};
export type UpdateUserMutation$data = {
  readonly updateUser: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type UpdateUserMutation = {
  response: UpdateUserMutation$data;
  variables: UpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "availableVacation"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isManager"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "joinDate"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "positionId"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamId"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v8 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "availableVacation",
            "variableName": "availableVacation"
          },
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
    "concreteType": "UpdateUserOutput",
    "kind": "LinkedField",
    "name": "updateUser",
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
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v8/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v7/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "e6c69eb557df6d501cba7432ad9fe5a6",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $userId: ID!\n  $email: String\n  $isManager: Boolean\n  $name: String\n  $joinDate: DateTime\n  $availableVacation: Float\n  $positionId: ID\n  $teamId: ID\n) {\n  updateUser(input: {userId: $userId, email: $email, isManager: $isManager, name: $name, joinDate: $joinDate, availableVacation: $availableVacation, positionId: $positionId, teamId: $teamId}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "f85250cccff2671861459184ac273c2a";

export default node;
