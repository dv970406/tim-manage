/**
 * @generated SignedSource<<b59e5a935b8fc691ba8558a7852f8bc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreatePositionMutation$variables = {
  position: string;
};
export type CreatePositionMutation$data = {
  readonly createPosition: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly position: {
      readonly id: string;
      readonly position: string;
    } | null;
  };
};
export type CreatePositionMutation = {
  response: CreatePositionMutation$data;
  variables: CreatePositionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
            "name": "position",
            "variableName": "position"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreatePositionOutput",
    "kind": "LinkedField",
    "name": "createPosition",
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
    "name": "CreatePositionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePositionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4b63e1ed8fefe0c3d19e20a7200c7cfd",
    "id": null,
    "metadata": {},
    "name": "CreatePositionMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePositionMutation(\n  $position: String!\n) {\n  createPosition(input: {position: $position}) {\n    ok\n    error\n    position {\n      id\n      position\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "44b90dc7142446263870aa5bdb26a8d5";

export default node;
