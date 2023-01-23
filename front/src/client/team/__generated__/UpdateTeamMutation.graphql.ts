/**
 * @generated SignedSource<<a3f6dbb09776ff4cbb5bd261fcff3254>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTeamMutation$variables = {
  id: string;
  team: string;
};
export type UpdateTeamMutation$data = {
  readonly updateTeam: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type UpdateTeamMutation = {
  response: UpdateTeamMutation$data;
  variables: UpdateTeamMutation$variables;
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
    "name": "team"
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
          },
          {
            "kind": "Variable",
            "name": "team",
            "variableName": "team"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateTeamOutput",
    "kind": "LinkedField",
    "name": "updateTeam",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateTeamMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateTeamMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "77b04371ccaed07b9e02d1016cf7844f",
    "id": null,
    "metadata": {},
    "name": "UpdateTeamMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTeamMutation(\n  $id: ID!\n  $team: String!\n) {\n  updateTeam(input: {id: $id, team: $team}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e47505c6b0a1ebfff30066a30fa8199";

export default node;
