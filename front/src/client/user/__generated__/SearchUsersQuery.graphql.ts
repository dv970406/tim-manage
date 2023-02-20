/**
 * @generated SignedSource<<c6bad918a299d040ee6bdde43102a057>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchUsersQuery$variables = {
  keyword?: string | null;
};
export type SearchUsersQuery$data = {
  readonly searchUsers: {
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type SearchUsersQuery = {
  response: SearchUsersQuery$data;
  variables: SearchUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "keyword"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "keyword",
        "variableName": "keyword"
      }
    ],
    "concreteType": "SearchUsersOutput",
    "kind": "LinkedField",
    "name": "searchUsers",
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
    "name": "SearchUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "651131c075ff9c689da8e40babb9f926",
    "id": null,
    "metadata": {},
    "name": "SearchUsersQuery",
    "operationKind": "query",
    "text": "query SearchUsersQuery(\n  $keyword: String\n) {\n  searchUsers(keyword: $keyword) {\n    ok\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "f7812bbd0893bca4711030bb824919a6";

export default node;
