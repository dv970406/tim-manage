/**
 * @generated SignedSource<<9fa0f5429bee6f7bb4cfd54b1f495a2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserMutation$variables = {
  email: string;
  joinDate: any;
  name: string;
  positionId: string;
  teamId: string;
};
export type CreateUserMutation$data = {
  readonly createUser: {
    readonly edge: {
      readonly cursor: any;
      readonly node: {
        readonly createdAt: any;
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
      };
    };
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
  "name": "joinDate"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "positionId"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamId"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserEdge",
        "kind": "LinkedField",
        "name": "edge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v5/*: any*/),
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
                "concreteType": "Position",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
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
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "team",
                    "storageKey": null
                  }
                ],
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
                "name": "createdAt",
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
      (v4/*: any*/)
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
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateUserMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "eaca90a01ea93f4faa8b1224c4a25dfe",
    "id": null,
    "metadata": {},
    "name": "CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateUserMutation(\n  $email: String!\n  $name: String!\n  $joinDate: DateTime!\n  $positionId: ID!\n  $teamId: ID!\n) {\n  createUser(input: {email: $email, name: $name, joinDate: $joinDate, positionId: $positionId, teamId: $teamId}) {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        id\n        name\n        email\n        isManager\n        position {\n          id\n          position\n        }\n        team {\n          id\n          team\n        }\n        joinDate\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fb1eded1d1b6024a8c26514bae6caf64";

export default node;
