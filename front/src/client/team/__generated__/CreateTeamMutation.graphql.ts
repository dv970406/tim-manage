/**
 * @generated SignedSource<<7d13e90c7f8efd6cd64ec9a5a6779243>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTeamMutation$variables = {
  team: string;
};
export type CreateTeamMutation$data = {
  readonly createTeam: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type CreateTeamMutation = {
  response: CreateTeamMutation$data;
  variables: CreateTeamMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
            "name": "team",
            "variableName": "team"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateTeamOutput",
    "kind": "LinkedField",
    "name": "createTeam",
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
    "name": "CreateTeamMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTeamMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aed094cc33f7fae92670a933f0fd1168",
    "id": null,
    "metadata": {},
    "name": "CreateTeamMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTeamMutation(\n  $team: String!\n) {\n  createTeam(input: {team: $team}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d2d8be840761665363a3d1374f6e748";

export default node;
