/**
 * @generated SignedSource<<4eb0ff8d76636d66743730ef1c735314>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeletePositionMutation$variables = {
  id: string;
};
export type DeletePositionMutation$data = {
  readonly deletePosition: {
    readonly deletedPositionId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeletePositionMutation = {
  response: DeletePositionMutation$data;
  variables: DeletePositionMutation$variables;
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
  "name": "deletedPositionId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeletePositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeletePositionOutput",
        "kind": "LinkedField",
        "name": "deletePosition",
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
    "name": "DeletePositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeletePositionOutput",
        "kind": "LinkedField",
        "name": "deletePosition",
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
            "name": "deletedPositionId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2d07445af81b6b6f69bc3a86f948bd8b",
    "id": null,
    "metadata": {},
    "name": "DeletePositionMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePositionMutation(\n  $id: ID!\n) {\n  deletePosition(input: {id: $id}) {\n    ok\n    error\n    deletedPositionId\n  }\n}\n"
  }
};
})();

(node as any).hash = "864eaf25ed3f21f94c257ec66e1333ef";

export default node;
