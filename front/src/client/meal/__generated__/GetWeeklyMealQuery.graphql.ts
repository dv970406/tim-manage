/**
 * @generated SignedSource<<2a95b1a911067cb69f5018b88e7d2c84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type GetWeeklyMealQuery$variables = {};
export type GetWeeklyMealQuery$data = {
  readonly getWeeklyMeal: {
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
export type GetWeeklyMealQuery = {
  response: GetWeeklyMealQuery$data;
  variables: GetWeeklyMealQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "ok",
      storageKey: null,
    },
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "error",
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "mon",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "tue",
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "wed",
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "thu",
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "fri",
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GetWeeklyMealQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "GetWeeklyMealOutput",
          kind: "LinkedField",
          name: "getWeeklyMeal",
          plural: false,
          selections: [
            v0 /*: any*/,
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "Meal",
              kind: "LinkedField",
              name: "weeklyMeal",
              plural: false,
              selections: [
                v2 /*: any*/,
                v3 /*: any*/,
                v4 /*: any*/,
                v5 /*: any*/,
                v6 /*: any*/,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "GetWeeklyMealQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "GetWeeklyMealOutput",
          kind: "LinkedField",
          name: "getWeeklyMeal",
          plural: false,
          selections: [
            v0 /*: any*/,
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "Meal",
              kind: "LinkedField",
              name: "weeklyMeal",
              plural: false,
              selections: [
                v2 /*: any*/,
                v3 /*: any*/,
                v4 /*: any*/,
                v5 /*: any*/,
                v6 /*: any*/,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "2761ac904ae2c23419fe74f04675c70b",
      id: null,
      metadata: {},
      name: "GetWeeklyMealQuery",
      operationKind: "query",
      text: "query GetWeeklyMealQuery {\n  getWeeklyMeal {\n    ok\n    error\n    weeklyMeal {\n      mon\n      tue\n      wed\n      thu\n      fri\n      id\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "dee488c2278895e25f63e190245534f2";

export default node;
