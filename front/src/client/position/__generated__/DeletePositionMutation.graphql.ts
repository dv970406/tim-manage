/**
 * @generated SignedSource<<09ccff0af4d1adb42bece17e842ed3ba>>
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
    "concreteType": "DeletePositionOutput",
    "kind": "LinkedField",
    "name": "deletePosition",
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
    "name": "DeletePositionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePositionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9cf99de395f8cc4901ac1f447b4d198",
    "id": null,
    "metadata": {},
    "name": "DeletePositionMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePositionMutation(\n  $id: ID!\n) {\n  deletePosition(input: {id: $id}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ab8769280a419b69a436dcbde19f96f";

export default node;
