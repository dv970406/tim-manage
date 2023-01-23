/**
 * @generated SignedSource<<dd56943426c1c49bd2c5b07c848245a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdatePositionMutation$variables = {
  id: string;
  position: string;
};
export type UpdatePositionMutation$data = {
  readonly updatePosition: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type UpdatePositionMutation = {
  response: UpdatePositionMutation$data;
  variables: UpdatePositionMutation$variables;
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
    "name": "position"
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
            "name": "position",
            "variableName": "position"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdatePositionOutput",
    "kind": "LinkedField",
    "name": "updatePosition",
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
    "name": "UpdatePositionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePositionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0e00bcf7fe526f827dcd03ac813885fa",
    "id": null,
    "metadata": {},
    "name": "UpdatePositionMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePositionMutation(\n  $id: ID!\n  $position: String!\n) {\n  updatePosition(input: {id: $id, position: $position}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f4e201c7a45aa145241c2b1fb4dff85";

export default node;
