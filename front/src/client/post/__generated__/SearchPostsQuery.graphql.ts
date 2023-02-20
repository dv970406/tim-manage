/**
 * @generated SignedSource<<60c01e39d0426d9cbecb09369896356d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchPostsQuery$variables = {
  keyword?: string | null;
};
export type SearchPostsQuery$data = {
  readonly searchPosts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly content: string;
        readonly id: string;
        readonly title: string;
      };
    }>;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type SearchPostsQuery = {
  response: SearchPostsQuery$data;
  variables: SearchPostsQuery$variables;
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
        "fields": [
          {
            "kind": "Variable",
            "name": "keyword",
            "variableName": "keyword"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SearchPostsOutput",
    "kind": "LinkedField",
    "name": "searchPosts",
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
        "concreteType": "PostEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "node",
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
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "content",
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
    "name": "SearchPostsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchPostsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c3246a845846de9d7a4768d49fc73a58",
    "id": null,
    "metadata": {},
    "name": "SearchPostsQuery",
    "operationKind": "query",
    "text": "query SearchPostsQuery(\n  $keyword: String\n) {\n  searchPosts(input: {keyword: $keyword}) {\n    ok\n    error\n    edges {\n      node {\n        id\n        title\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1cf37ae378727e262c793bd798c74470";

export default node;
