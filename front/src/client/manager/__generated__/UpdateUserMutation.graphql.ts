/**
 * @generated SignedSource<<dbc20e19913d8f266f625c4d9e1da262>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserMutation$variables = {
  availableVacation?: string | null;
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
    readonly user: {
      readonly availableVacation: string;
      readonly email: string;
      readonly id: string;
      readonly isManager: boolean;
      readonly joinDate: any;
      readonly name: string;
      readonly position: {
        readonly id: string;
        readonly position: string;
      };
      readonly team: {
        readonly id: string;
        readonly team: string;
      };
    } | null;
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isManager",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "joinDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "availableVacation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Position",
            "kind": "LinkedField",
            "name": "position",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Team",
            "kind": "LinkedField",
            "name": "team",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "team",
                "storageKey": null
              }
            ],
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
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v9/*: any*/),
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
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "f111868efde48be260a97f51d54bb8e3",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $userId: ID!\n  $email: String\n  $isManager: Boolean\n  $name: String\n  $joinDate: DateTime\n  $availableVacation: String\n  $positionId: ID\n  $teamId: ID\n) {\n  updateUser(input: {userId: $userId, email: $email, isManager: $isManager, name: $name, joinDate: $joinDate, availableVacation: $availableVacation, positionId: $positionId, teamId: $teamId}) {\n    ok\n    error\n    user {\n      id\n      email\n      isManager\n      name\n      joinDate\n      availableVacation\n      position {\n        id\n        position\n      }\n      team {\n        id\n        team\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "824c8aec4d1ceb3fc88d0854b98e589e";

export default node;
