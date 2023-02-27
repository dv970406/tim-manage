/**
 * @generated SignedSource<<1f8f0f39f565342f18a5c135030d55fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type SubscriptionConfirmVacationSubscription$variables = {};
export type SubscriptionConfirmVacationSubscription$data = {
  readonly subscriptionConfirmVacation: {
    readonly edge: {
      readonly cursor: any;
      readonly node: {
        readonly confirmedByWho: {
          readonly id: string;
          readonly name: string;
          readonly position: {
            readonly id: string;
            readonly position: string;
          };
        };
        readonly confirmedVacation: {
          readonly confirmed: {
            readonly byCeo: boolean;
            readonly byLeader: boolean;
            readonly byManager: boolean;
          };
          readonly duration: number;
          readonly endDate: any;
          readonly id: string;
          readonly startDate: any;
          readonly user: {
            readonly id: string;
            readonly name: string;
            readonly team: {
              readonly leader: {
                readonly id: string;
                readonly name: string;
              } | null;
            };
          };
        };
      };
    };
    readonly error: string | null;
    readonly ok: boolean;
  };
};
export type SubscriptionConfirmVacationSubscription = {
  response: SubscriptionConfirmVacationSubscription$data;
  variables: SubscriptionConfirmVacationSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "duration",
  "storageKey": null
},
v7 = {
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
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "leader",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "confirmedByWho",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Position",
      "kind": "LinkedField",
      "name": "position",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "position",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscriptionConfirmVacationSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NotificationOutput",
        "kind": "LinkedField",
        "name": "subscriptionConfirmVacation",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "NotificationEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Notification",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vacation",
                    "kind": "LinkedField",
                    "name": "confirmedVacation",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Team",
                            "kind": "LinkedField",
                            "name": "team",
                            "plural": false,
                            "selections": [
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
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
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SubscriptionConfirmVacationSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NotificationOutput",
        "kind": "LinkedField",
        "name": "subscriptionConfirmVacation",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "NotificationEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Notification",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vacation",
                    "kind": "LinkedField",
                    "name": "confirmedVacation",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Team",
                            "kind": "LinkedField",
                            "name": "team",
                            "plural": false,
                            "selections": [
                              (v9/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v3/*: any*/)
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
    "cacheID": "01b0ac10a0f9ffaf495504eb72e91392",
    "id": null,
    "metadata": {},
    "name": "SubscriptionConfirmVacationSubscription",
    "operationKind": "subscription",
    "text": "subscription SubscriptionConfirmVacationSubscription {\n  subscriptionConfirmVacation {\n    ok\n    error\n    edge {\n      cursor\n      node {\n        confirmedVacation {\n          id\n          startDate\n          endDate\n          duration\n          confirmed {\n            byCeo\n            byManager\n            byLeader\n          }\n          user {\n            id\n            name\n            team {\n              leader {\n                id\n                name\n              }\n              id\n            }\n          }\n        }\n        confirmedByWho {\n          id\n          name\n          position {\n            id\n            position\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6af8b6775c25b1d688f95b1db3ef50e5";

export default node;
