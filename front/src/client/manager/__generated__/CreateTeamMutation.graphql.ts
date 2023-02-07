/**
 * @generated SignedSource<<3347353df84300082bf4bae1901ba053>>
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
    readonly team: {
      readonly id: string;
      readonly team: string;
    } | null;
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
    "cacheID": "168f9995180e1e8f8a5d773a7b2ee82d",
    "id": null,
    "metadata": {},
    "name": "CreateTeamMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTeamMutation(\n  $team: String!\n) {\n  createTeam(input: {team: $team}) {\n    ok\n    error\n    team {\n      id\n      team\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4f7c326e7f3fe9007229ed610dba394";

export default node;
