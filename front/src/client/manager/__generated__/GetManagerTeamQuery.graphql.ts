/**
 * @generated SignedSource<<0b4ec506c296eaa2339b3f8ee94aabea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetManagerTeamQuery$variables = {
  id: string;
  skip: boolean;
};
export type GetManagerTeamQuery$data = {
  readonly getTeam?: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly team: {
      readonly id: string;
      readonly leader: {
        readonly id: string;
        readonly name: string;
      } | null;
      readonly team: string;
      readonly users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    } | null;
  };
};
export type GetManagerTeamQuery = {
  response: GetManagerTeamQuery$data;
  variables: GetManagerTeamQuery$variables;
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
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
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
        "concreteType": "GetTeamOutput",
        "kind": "LinkedField",
        "name": "getTeam",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "leader",
                "plural": false,
                "selections": (v2/*: any*/),
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
    "name": "GetManagerTeamQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetManagerTeamQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "60e0318385ea4dcaebcd68ed03501846",
    "id": null,
    "metadata": {},
    "name": "GetManagerTeamQuery",
    "operationKind": "query",
    "text": "query GetManagerTeamQuery(\n  $id: ID!\n  $skip: Boolean!\n) {\n  getTeam(input: {id: $id}) @skip(if: $skip) {\n    ok\n    error\n    team {\n      id\n      team\n      users {\n        id\n        name\n      }\n      leader {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "31232803bcb7929528ba9f18e3b2a715";

export default node;
