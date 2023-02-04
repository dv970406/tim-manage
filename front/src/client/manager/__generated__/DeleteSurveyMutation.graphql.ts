/**
 * @generated SignedSource<<1f684afcdb3c3481501028dfd20c2153>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteSurveyMutation$variables = {
  id: string;
};
export type DeleteSurveyMutation$data = {
  readonly deleteSurvey: {
    readonly deletedSurveyId: string | null;
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type DeleteSurveyMutation = {
  response: DeleteSurveyMutation$data;
  variables: DeleteSurveyMutation$variables;
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
  "name": "deletedSurveyId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteSurveyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteSurveyOutput",
        "kind": "LinkedField",
        "name": "deleteSurvey",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "DeleteSurveyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteSurveyOutput",
        "kind": "LinkedField",
        "name": "deleteSurvey",
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
            "name": "deletedSurveyId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "796963c3bcbc8ce91110b51388ba755b",
    "id": null,
    "metadata": {},
    "name": "DeleteSurveyMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteSurveyMutation(\n  $id: ID!\n) {\n  deleteSurvey(input: {id: $id}) {\n    ok\n    error\n    deletedSurveyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "69e5d60f90519ee2c01fced80a737f45";

export default node;
