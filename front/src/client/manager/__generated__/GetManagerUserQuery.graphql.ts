/**
 * @generated SignedSource<<bed8df24e6afb527bf28060a5fa90fb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetManagerUserQuery$variables = {
  skip: boolean;
  userId: string;
};
export type GetManagerUserQuery$data = {
  readonly getUser?: {
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
export type GetManagerUserQuery = {
  response: GetManagerUserQuery$data;
  variables: GetManagerUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "condition": "skip",
    "kind": "Condition",
    "passingValue": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "concreteType": "GetUserOutput",
        "kind": "LinkedField",
        "name": "getUser",
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
              (v2/*: any*/),
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
                "kind": "ScalarField",
                "name": "joinDate",
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
                  (v2/*: any*/),
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
                  (v2/*: any*/),
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
                "name": "availableVacation",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerUserQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetManagerUserQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2ef7530af7c22e883695fecb7be22337",
    "id": null,
    "metadata": {},
    "name": "GetManagerUserQuery",
    "operationKind": "query",
    "text": "query GetManagerUserQuery(\n  $userId: ID!\n  $skip: Boolean!\n) {\n  getUser(userId: $userId) @skip(if: $skip) {\n    ok\n    error\n    user {\n      id\n      name\n      email\n      isManager\n      joinDate\n      position {\n        id\n        position\n      }\n      team {\n        id\n        team\n      }\n      availableVacation\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d27d19e2a3ae96faddbf8b667a3fcf9f";

export default node;
