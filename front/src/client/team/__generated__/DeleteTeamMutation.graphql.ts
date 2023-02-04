/**
 * @generated SignedSource<<d812932896c7fa3bb78f7e717854d1e1>>
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
    readonly deletedTeamId: string | null;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedTeamId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTeamMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTeamOutput",
        "kind": "LinkedField",
        "name": "deleteTeam",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTeamMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTeamOutput",
        "kind": "LinkedField",
        "name": "deleteTeam",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTeamId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6e3bc12cc222a52807ade9304d191418",
    "id": null,
    "metadata": {},
    "name": "DeleteTeamMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTeamMutation(\n  $id: ID!\n) {\n  deleteTeam(input: {id: $id}) {\n    ok\n    error\n    deletedTeamId\n  }\n}\n"
  }
};
})();

(node as any).hash = "557dc2f3b625b43393d1bd5aad9a984f";

export default node;
