/**
 * @generated SignedSource<<53fa30fb19d0b10e2ef168db37237ca6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetMyInfoQuery$variables = {
  skip: boolean;
};
export type GetMyInfoQuery$data = {
  readonly getMyInfo?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly email: string;
      readonly id: string;
      readonly isLeader: boolean;
      readonly isManager: boolean;
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
export type GetMyInfoQuery = {
  response: GetMyInfoQuery$data;
  variables: GetMyInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
        "args": null,
        "concreteType": "GetMyInfoOutput",
        "kind": "LinkedField",
        "name": "getMyInfo",
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
                "name": "isLeader",
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
    "name": "GetMyInfoQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetMyInfoQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "85156f3562342c90b3655aed15be046f",
    "id": null,
    "metadata": {},
    "name": "GetMyInfoQuery",
    "operationKind": "query",
    "text": "query GetMyInfoQuery(\n  $skip: Boolean!\n) {\n  getMyInfo @skip(if: $skip) {\n    ok\n    error\n    user {\n      id\n      name\n      email\n      isManager\n      isLeader\n      team {\n        id\n        team\n      }\n      position {\n        id\n        position\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a51158f7b31941e8b838a0b1116003d8";

export default node;
