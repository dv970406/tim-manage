/**
 * @generated SignedSource<<5a0a1981b5495985b2213589bb8140f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateVacationMutation$variables = {
  endDate: any;
  isHalf: boolean;
  startDate: any;
};
export type CreateVacationMutation$data = {
  readonly createVacation: {
    readonly error: string | null;
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
        readonly id: string;
        readonly name: string;
      };
    } | null;
  };
};
export type CreateVacationMutation = {
  response: CreateVacationMutation$data;
  variables: CreateVacationMutation$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
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
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateVacationOutput",
    "kind": "LinkedField",
    "name": "createVacation",
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
          (v3/*: any*/),
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateVacationMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateVacationMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b873449c2ef8efcd26376fbe7c1fadca",
    "id": null,
    "metadata": {},
    "name": "CreateVacationMutation",
    "operationKind": "mutation",
    "text": "mutation CreateVacationMutation(\n  $startDate: DateTime!\n  $endDate: DateTime!\n  $isHalf: Boolean!\n) {\n  createVacation(input: {startDate: $startDate, endDate: $endDate, isHalf: $isHalf}) {\n    ok\n    error\n    vacation {\n      id\n      startDate\n      endDate\n      confirmed {\n        byCeo\n        byLeader\n        byManager\n      }\n      isHalf\n      duration\n      user {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "380d495e3c383c5ee6b3843cb83f64b3";

export default node;
