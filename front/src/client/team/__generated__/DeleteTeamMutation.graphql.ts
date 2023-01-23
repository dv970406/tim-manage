/**
 * @generated SignedSource<<deb45a67f9986e458bde714de1759593>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTeamMutation$variables = {
  id: string;
};
export type DeleteTeamMutation$data = {
  readonly deleteTeam: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeleteTeamMutation = {
  response: DeleteTeamMutation$data;
  variables: DeleteTeamMutation$variables;
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
    "concreteType": "DeleteTeamOutput",
    "kind": "LinkedField",
    "name": "deleteTeam",
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
    "name": "DeleteTeamMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTeamMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a0a8f7b67db7512ef4eb05181589c014",
    "id": null,
    "metadata": {},
    "name": "DeleteTeamMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTeamMutation(\n  $id: ID!\n) {\n  deleteTeam(input: {id: $id}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "3fd44e5c1a03ac077e731204ba6599a5";

export default node;
