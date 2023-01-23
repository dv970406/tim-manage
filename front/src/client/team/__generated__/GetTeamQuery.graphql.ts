/**
 * @generated SignedSource<<7c7350f3ca7cee1922b0d0176aa128da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetTeamQuery$variables = {
  id: string;
};
export type GetTeamQuery$data = {
  readonly getTeam: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly team: {
      readonly id: string;
      readonly team: string;
    } | null;
  };
};
export type GetTeamQuery = {
  response: GetTeamQuery$data;
  variables: GetTeamQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetTeamQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetTeamQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "555669639ee8949623845dfe89e84fbc",
    "id": null,
    "metadata": {},
    "name": "GetTeamQuery",
    "operationKind": "query",
    "text": "query GetTeamQuery(\n  $id: ID!\n) {\n  getTeam(input: {id: $id}) {\n    ok\n    error\n    team {\n      id\n      team\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "163569a188dcc2ca734d439425dfe92d";

export default node;
