/**
 * @generated SignedSource<<554aada08401f841113e6dc37340ff37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteCommentMutation$variables = {
  id: string;
};
export type DeleteCommentMutation$data = {
  readonly deleteComment: {
    readonly deletedCommentId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
    readonly postId: string | null;
  };
};
export type DeleteCommentMutation = {
  response: DeleteCommentMutation$data;
  variables: DeleteCommentMutation$variables;
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
  "name": "deletedCommentId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCommentOutput",
        "kind": "LinkedField",
        "name": "deleteComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "DeleteCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCommentOutput",
        "kind": "LinkedField",
        "name": "deleteComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedCommentId"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75095fbcbde4d781e49192991a427d12",
    "id": null,
    "metadata": {},
    "name": "DeleteCommentMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCommentMutation(\n  $id: ID!\n) {\n  deleteComment(input: {id: $id}) {\n    ok\n    error\n    deletedCommentId\n    postId\n  }\n}\n"
  }
};
})();

(node as any).hash = "d7b61023f00ca4f090965b477cd2c387";

export default node;
