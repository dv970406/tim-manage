/**
 * @generated SignedSource<<39db7512844ba51a6265af5797c0c614>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateVacationMutation$variables = {
  endDate?: any | null;
  isHalf?: boolean | null;
  startDate?: any | null;
  vacationId: string;
};
export type UpdateVacationMutation$data = {
  readonly updateVacation: {
    readonly error: string | null;
    readonly notificationsIdOfVacation: ReadonlyArray<string> | null;
    readonly ok: boolean;
    readonly vacation: {
      readonly confirmed: {
        readonly byCeo: boolean;
        readonly byLeader: boolean;
        readonly byManager: boolean;
      };
      readonly duration: number;
      readonly endDate: any;
      readonly id: string;
      readonly isHalf: boolean;
      readonly startDate: any;
      readonly user: {
        readonly availableVacation: string;
        readonly id: string;
        readonly name: string;
      };
    } | null;
  };
};
export type UpdateVacationMutation = {
  response: UpdateVacationMutation$data;
  variables: UpdateVacationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "endDate"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isHalf"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startDate"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vacationId"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "endDate",
            "variableName": "endDate"
          },
          {
            "kind": "Variable",
            "name": "isHalf",
            "variableName": "isHalf"
          },
          {
            "kind": "Variable",
            "name": "startDate",
            "variableName": "startDate"
          },
          {
            "kind": "Variable",
            "name": "vacationId",
            "variableName": "vacationId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateVacationOutput",
    "kind": "LinkedField",
    "name": "updateVacation",
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
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endDate",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isHalf",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "duration",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "availableVacation",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "notificationsIdOfVacation",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateVacationMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateVacationMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "e47e67fc096a605fba329b01fd261672",
    "id": null,
    "metadata": {},
    "name": "UpdateVacationMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateVacationMutation(\n  $vacationId: ID!\n  $startDate: DateTime\n  $endDate: DateTime\n  $isHalf: Boolean\n) {\n  updateVacation(input: {vacationId: $vacationId, startDate: $startDate, endDate: $endDate, isHalf: $isHalf}) {\n    ok\n    error\n    vacation {\n      id\n      startDate\n      endDate\n      confirmed {\n        byCeo\n        byLeader\n        byManager\n      }\n      isHalf\n      duration\n      user {\n        id\n        name\n        availableVacation\n      }\n    }\n    notificationsIdOfVacation\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7ac1721e7fb0ffde0991382c69d264a";

export default node;
