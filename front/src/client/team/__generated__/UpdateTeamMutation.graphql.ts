/**
 * @generated SignedSource<<a2d3118cc4224023b68236d88141c3ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTeamMutation$variables = {
  leaderId?: string | null;
  team?: string | null;
  teamId: string;
};
export type UpdateTeamMutation$data = {
  readonly updateTeam: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly team: {
      readonly id: string;
      readonly leader: {
        readonly id: string;
        readonly name: string;
      };
      readonly team: string;
    } | null;
  };
};
export type UpdateTeamMutation = {
  response: UpdateTeamMutation$data;
  variables: UpdateTeamMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "leaderId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "team"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "leaderId",
            "variableName": "leaderId"
          },
          {
            "kind": "Variable",
            "name": "team",
            "variableName": "team"
          },
          {
            "kind": "Variable",
            "name": "teamId",
            "variableName": "teamId"
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "team",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
            "name": "leader",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateTeamMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateTeamMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "05128b3a5ce60c7a2324309a5804dd6e",
    "id": null,
    "metadata": {},
    "name": "UpdateTeamMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTeamMutation(\n  $teamId: ID!\n  $team: String\n  $leaderId: ID\n) {\n  updateTeam(input: {teamId: $teamId, team: $team, leaderId: $leaderId}) {\n    ok\n    error\n    team {\n      id\n      team\n      leader {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f3f549319aff6b57228c7502e044bbc";

export default node;
