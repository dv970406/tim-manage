/**
 * @generated SignedSource<<984cb01ad978978e40093485e3bd1ee2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetTeamsQuery$variables = {};
export type GetTeamsQuery$data = {
  readonly getTeams: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly teams: ReadonlyArray<{
      readonly id: string;
      readonly team: string;
    }> | null;
  };
};
export type GetTeamsQuery = {
  response: GetTeamsQuery$data;
  variables: GetTeamsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetTeamsOutput",
    "kind": "LinkedField",
    "name": "getTeams",
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
        "name": "teams",
        "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetTeamsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetTeamsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7c6ed9e9e9a5034de411fe077ad732c",
    "id": null,
    "metadata": {},
    "name": "GetTeamsQuery",
    "operationKind": "query",
    "text": "query GetTeamsQuery {\n  getTeams {\n    ok\n    error\n    teams {\n      id\n      team\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "00215091884b9f575f738f0a09288ccb";

export default node;
