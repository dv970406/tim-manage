/**
 * @generated SignedSource<<603c0900f1c08ef29f85992f5b310ecc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type SubscriptionConfirmVacationSubscription$variables = {
  userId: string;
};
export type SubscriptionConfirmVacationSubscription$data = {
  readonly subscriptionConfirmVacation: {
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
export type SubscriptionConfirmVacationSubscription = {
  response: SubscriptionConfirmVacationSubscription$data;
  variables: SubscriptionConfirmVacationSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startDate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "duration",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "leader",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscriptionConfirmVacationSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Vacation",
        "kind": "LinkedField",
        "name": "subscriptionConfirmVacation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Team",
                "kind": "LinkedField",
                "name": "team",
                "plural": false,
                "selections": [
                  (v8/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscriptionConfirmVacationSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Vacation",
        "kind": "LinkedField",
        "name": "subscriptionConfirmVacation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Team",
                "kind": "LinkedField",
                "name": "team",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v2/*: any*/)
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
    "cacheID": "097429b991ee1c9fc981a12220ca53e1",
    "id": null,
    "metadata": {},
    "name": "SubscriptionConfirmVacationSubscription",
    "operationKind": "subscription",
    "text": "subscription SubscriptionConfirmVacationSubscription(\n  $userId: ID!\n) {\n  subscriptionConfirmVacation(userId: $userId) {\n    id\n    startDate\n    endDate\n    duration\n    confirmed {\n      byCeo\n      byManager\n      byLeader\n    }\n    user {\n      id\n      name\n      team {\n        leader {\n          id\n          name\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "40acd4b3fe5727e75b8b0f51bdb19504";

export default node;
