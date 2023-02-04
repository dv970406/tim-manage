/**
 * @generated SignedSource<<9757783345a3431011edcf072a18b9c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetManagerUserQuery$variables = {
  id: string;
  skip: boolean;
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "condition": "skip",
    "kind": "Condition",
    "passingValue": false,
    "selections": [
      {
        "alias": null,
        "args": [
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
              (v1/*: any*/),
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
                  (v1/*: any*/),
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
                  (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerUserQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerUserQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "558d5b6ad575edd756cad020550566b7",
    "id": null,
    "metadata": {},
    "name": "GetManagerUserQuery",
    "operationKind": "query",
    "text": "query GetManagerUserQuery(\n  $id: ID!\n  $skip: Boolean!\n) {\n  getUser(input: {id: $id}) @skip(if: $skip) {\n    ok\n    error\n    user {\n      id\n      name\n      email\n      isManager\n      joinDate\n      position {\n        id\n        position\n      }\n      team {\n        id\n        team\n      }\n      availableVacation\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ed8be3ca81559dda190f43e6cf54d61";

export default node;
