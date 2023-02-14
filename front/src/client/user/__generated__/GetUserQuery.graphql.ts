/**
 * @generated SignedSource<<8d1a7a84c0fe7b2b3d17ac16d74b100c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetUserQuery$variables = {
  id: string;
};
export type GetUserQuery$data = {
  readonly getUser: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"ShowUserInfo_user" | "ShowUserVacations_vacation">;
    } | null;
  };
};
export type GetUserQuery = {
  response: GetUserQuery$data;
  variables: GetUserQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetUserOutput",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ShowUserInfo_user"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ShowUserVacations_vacation"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetUserOutput",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isManager",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "joinDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Position",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "position",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Team",
                "kind": "LinkedField",
                "name": "team",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "team",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "availableVacation",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Vacation",
                "kind": "LinkedField",
                "name": "vacations",
                "plural": true,
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
                    "kind": "ScalarField",
                    "name": "duration",
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
                        "name": "byManager",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "byLeader",
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b3f7cdb3bf93e8bde84e6bc3f7a02fd4",
    "id": null,
    "metadata": {},
    "name": "GetUserQuery",
    "operationKind": "query",
    "text": "query GetUserQuery(\n  $id: ID!\n) {\n  getUser(input: {id: $id}) {\n    ok\n    error\n    user {\n      ...ShowUserInfo_user\n      ...ShowUserVacations_vacation\n      id\n    }\n  }\n}\n\nfragment ShowUserInfo_user on User {\n  id\n  name\n  email\n  isManager\n  joinDate\n  position {\n    id\n    position\n  }\n  team {\n    id\n    team\n  }\n}\n\nfragment ShowUserVacationsHistory_vacation on Vacation {\n  id\n  startDate\n  endDate\n  duration\n  isHalf\n  confirmed {\n    byCeo\n    byManager\n    byLeader\n  }\n}\n\nfragment ShowUserVacations_vacation on User {\n  availableVacation\n  vacations {\n    ...ShowUserVacationsHistory_vacation\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e5aaff7c68c6699278ecd7b672afedd";

export default node;
