/**
 * @generated SignedSource<<2145e138ab9bcd5f394a7c2141a87714>>
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
    "cacheID": "dec028980162b10c236deb70e1cca573",
    "id": null,
    "metadata": {},
    "name": "CreatePositionMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePositionMutation(\n  $position: String!\n) {\n  createPosition(input: {position: $position}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "6dc8781b346e5658572abf087b2cc6f9";

export default node;
