/**
 * @generated SignedSource<<569caabd94b7c60801bc91a049f6fa4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type getPositionQuery$variables = {
  id: string;
};
export type getPositionQuery$data = {
  readonly getPosition: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly users: ReadonlyArray<{
      readonly email: string;
      readonly id: string;
      readonly name: string;
    }> | null;
  };
};
export type getPositionQuery = {
  response: getPositionQuery$data;
  variables: getPositionQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "id",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            fields: [
              {
                kind: "Variable",
                name: "id",
                variableName: "id",
              },
            ],
            kind: "ObjectValue",
            name: "input",
          },
        ],
        concreteType: "GetPositionOutput",
        kind: "LinkedField",
        name: "getPosition",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ok",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "error",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "users",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "getPositionQuery",
      selections: v1 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "getPositionQuery",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "200488531f183a17d422d22ae4dd33ff",
      id: null,
      metadata: {},
      name: "getPositionQuery",
      operationKind: "query",
      text: "query getPositionQuery(\n  $id: ID!\n) {\n  getPosition(input: {id: $id}) {\n    ok\n    error\n    users {\n      id\n      name\n      email\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "ae06c5861283a9b9088f1e5c4a365ebd";

export default node;
