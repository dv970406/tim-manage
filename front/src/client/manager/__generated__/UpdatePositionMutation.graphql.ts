/**
 * @generated SignedSource<<6eb8920f22a268bedb9350729657e94b>>
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
    readonly position: {
      readonly id: string;
      readonly position: string;
    } | null;
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Position",
        "kind": "LinkedField",
        "name": "position",
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
            "name": "position",
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
    "cacheID": "7de9ed4448d0e04f0ede08bfac98a0ee",
    "id": null,
    "metadata": {},
    "name": "UpdatePositionMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePositionMutation(\n  $id: ID!\n  $position: String!\n) {\n  updatePosition(input: {id: $id, position: $position}) {\n    ok\n    error\n    position {\n      id\n      position\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b111c6992b0fe759f99dc2d4c1aff6fc";

export default node;
