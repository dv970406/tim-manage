/**
 * @generated SignedSource<<d878ee0b77c4598d1ef83af2e9e5cb1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserPasswordMutation$variables = {
  password: string;
};
export type UpdateUserPasswordMutation$data = {
  readonly updateUserPassword: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type UpdateUserPasswordMutation = {
  response: UpdateUserPasswordMutation$data;
  variables: UpdateUserPasswordMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
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
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateUserPasswordOutput",
    "kind": "LinkedField",
    "name": "updateUserPassword",
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
    "name": "UpdateUserPasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserPasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c827eea70434389da7839399966fa867",
    "id": null,
    "metadata": {},
    "name": "UpdateUserPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserPasswordMutation(\n  $password: String!\n) {\n  updateUserPassword(input: {password: $password}) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "7066d6997f78fff284a3d76dce0f157e";

export default node;
