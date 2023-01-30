/**
 * @generated SignedSource<<a7a8d7e39bda0be3d8c5aa4c8674f871>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeletePostMutation$variables = {
  id: string;
};
export type DeletePostMutation$data = {
  readonly deletePost: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeletePostMutation = {
  response: DeletePostMutation$data;
  variables: DeletePostMutation$variables;
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
    "concreteType": "DeletePostOutput",
    "kind": "LinkedField",
    "name": "deletePost",
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
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1b5b3cf4aa29766987e656fd32bd190e",
    "id": null,
    "metadata": {},
    "name": "DeletePostMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePostMutation(\n  $id: ID!\n) {\n  deletePost(input: {id: $id}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "250db2d8357f34b64df18eaeda8c092e";

export default node;
