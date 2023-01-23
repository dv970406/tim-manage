/**
 * @generated SignedSource<<32515faade61f9bb43db0dbc01a930f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteVacationMutation$variables = {
  id: string;
};
export type DeleteVacationMutation$data = {
  readonly deleteVacation: {
    readonly deletedVacationId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeleteVacationMutation = {
  response: DeleteVacationMutation$data;
  variables: DeleteVacationMutation$variables;
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
  "name": "deletedVacationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteVacationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteVacationOutput",
        "kind": "LinkedField",
        "name": "deleteVacation",
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
    "name": "DeleteVacationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteVacationOutput",
        "kind": "LinkedField",
        "name": "deleteVacation",
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
            "name": "deletedVacationId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "92ec069fe774b9c55d81745117b4a5d5",
    "id": null,
    "metadata": {},
    "name": "DeleteVacationMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteVacationMutation(\n  $id: ID!\n) {\n  deleteVacation(input: {id: $id}) {\n    ok\n    error\n    deletedVacationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e300be5b62447263b93172452e4ecda4";

export default node;
