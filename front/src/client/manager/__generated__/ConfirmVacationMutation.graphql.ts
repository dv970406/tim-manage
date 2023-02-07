/**
 * @generated SignedSource<<7adb79da3a8d81cea9348e00d0bf1082>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ConfirmVacationMutation$variables = {
  id: string;
};
export type ConfirmVacationMutation$data = {
  readonly confirmVacation: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly vacation: {
      readonly confirmed: {
        readonly byCeo: boolean;
        readonly byLeader: boolean;
        readonly byManager: boolean;
      };
      readonly id: string;
    } | null;
  };
};
export type ConfirmVacationMutation = {
  response: ConfirmVacationMutation$data;
  variables: ConfirmVacationMutation$variables;
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
    "concreteType": "ConfirmVacationOutput",
    "kind": "LinkedField",
    "name": "confirmVacation",
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
        "concreteType": "Vacation",
        "kind": "LinkedField",
        "name": "vacation",
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
            "concreteType": "Confirm",
            "kind": "LinkedField",
            "name": "confirmed",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byCeo",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byLeader",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "byManager",
                "storageKey": null
              }
            ],
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
    "name": "ConfirmVacationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmVacationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b87ae43864aa51663b1e160070f3caba",
    "id": null,
    "metadata": {},
    "name": "ConfirmVacationMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmVacationMutation(\n  $id: ID!\n) {\n  confirmVacation(input: {id: $id}) {\n    ok\n    error\n    vacation {\n      id\n      confirmed {\n        byCeo\n        byLeader\n        byManager\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "45a8fe034003379b57e1f435aa98d83a";

export default node;
