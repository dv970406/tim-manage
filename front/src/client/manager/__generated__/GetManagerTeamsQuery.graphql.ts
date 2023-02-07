/**
 * @generated SignedSource<<6c327b63f2236ca7c8e06986c8284451>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetManagerTeamsQuery$variables = {};
export type GetManagerTeamsQuery$data = {
  readonly getTeams: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly teams: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ManagerTeamTableContent_team">;
    }> | null;
  };
};
export type GetManagerTeamsQuery = {
  response: GetManagerTeamsQuery$data;
  variables: GetManagerTeamsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetManagerTeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetTeamsOutput",
        "kind": "LinkedField",
        "name": "getTeams",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Team",
            "kind": "LinkedField",
            "name": "teams",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ManagerTeamTableContent_team"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetManagerTeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetTeamsOutput",
        "kind": "LinkedField",
        "name": "getTeams",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "9c349c771c2c80360bce9f83c4e9e28c",
    "id": null,
    "metadata": {},
    "name": "GetManagerTeamsQuery",
    "operationKind": "query",
    "text": "query GetManagerTeamsQuery {\n  getTeams {\n    ok\n    error\n    teams {\n      ...ManagerTeamTableContent_team\n      id\n    }\n  }\n}\n\nfragment ManagerTeamTableContent_team on Team {\n  id\n  team\n}\n"
  }
};
})();

(node as any).hash = "cd432d8bb88929811e5214b3d0eaf66f";

export default node;
