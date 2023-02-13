/**
 * @generated SignedSource<<229bd3cd1a351e47cfc9bc85f1c62712>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateWeeklyMealMutation$variables = {
  excelToJson: string;
};
export type CreateWeeklyMealMutation$data = {
  readonly createWeeklyMeal: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly weeklyMeal: {
      readonly fri: ReadonlyArray<string>;
      readonly mon: ReadonlyArray<string>;
      readonly thu: ReadonlyArray<string>;
      readonly tue: ReadonlyArray<string>;
      readonly wed: ReadonlyArray<string>;
    } | null;
  };
};
export type CreateWeeklyMealMutation = {
  response: CreateWeeklyMealMutation$data;
  variables: CreateWeeklyMealMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "excelToJson"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "excelToJson",
        "variableName": "excelToJson"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mon",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tue",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "wed",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "thu",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fri",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateWeeklyMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateWeeklyMealOutput",
        "kind": "LinkedField",
        "name": "createWeeklyMeal",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Meal",
            "kind": "LinkedField",
            "name": "weeklyMeal",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateWeeklyMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateWeeklyMealOutput",
        "kind": "LinkedField",
        "name": "createWeeklyMeal",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Meal",
            "kind": "LinkedField",
            "name": "weeklyMeal",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfd186918e3a390b06b6d6a319c9e513",
    "id": null,
    "metadata": {},
    "name": "CreateWeeklyMealMutation",
    "operationKind": "mutation",
    "text": "mutation CreateWeeklyMealMutation(\n  $excelToJson: String!\n) {\n  createWeeklyMeal(input: {excelToJson: $excelToJson}) {\n    ok\n    error\n    weeklyMeal {\n      mon\n      tue\n      wed\n      thu\n      fri\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1a55cc6c68ef055942a3db9c8ed84b38";

export default node;
