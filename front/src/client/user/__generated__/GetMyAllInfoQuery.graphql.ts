/**
 * @generated SignedSource<<03515cac13d7d94aa2d739298b80121f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetMyAllInfoQuery$variables = {};
export type GetMyAllInfoQuery$data = {
  readonly getMyInfo: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"ShowUserAnswers_answer" | "ShowUserInfo_user" | "ShowUserPosts_post" | "ShowUserVacations_vacation">;
    } | null;
  };
};
export type GetMyAllInfoQuery = {
  response: GetMyAllInfoQuery$data;
  variables: GetMyAllInfoQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isLiked",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "countLikes",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "countComments",
    "storageKey": null
  },
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Post",
  "kind": "LinkedField",
  "name": "post",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetMyAllInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUserOutput",
        "kind": "LinkedField",
        "name": "getMyInfo",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
                "name": "ShowUserPosts_post"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ShowUserAnswers_answer"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetMyAllInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetUserOutput",
        "kind": "LinkedField",
        "name": "getMyInfo",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
                  (v2/*: any*/),
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
                  (v2/*: any*/),
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
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "posts",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Like",
                "kind": "LinkedField",
                "name": "likes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "comments",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "results",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Survey",
                    "kind": "LinkedField",
                    "name": "survey",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "surveyTitle",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isAnonymous",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isAnswered",
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
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
                  (v2/*: any*/),
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
    "cacheID": "ceb8f894634fc2633e7489b2f842f5dc",
    "id": null,
    "metadata": {},
    "name": "GetMyAllInfoQuery",
    "operationKind": "query",
    "text": "query GetMyAllInfoQuery {\n  getMyInfo {\n    ok\n    error\n    user {\n      ...ShowUserInfo_user\n      ...ShowUserPosts_post\n      ...ShowUserAnswers_answer\n      ...ShowUserVacations_vacation\n      id\n    }\n  }\n}\n\nfragment PostTableContent_post on Post {\n  id\n  title\n  user {\n    id\n    name\n  }\n  isLiked\n  countLikes\n  countComments\n  createdAt\n}\n\nfragment ShowUserAnswers_answer on User {\n  answers {\n    id\n    results\n    survey {\n      id\n      ...SurveyTableContent_survey\n    }\n  }\n}\n\nfragment ShowUserInfo_user on User {\n  id\n  name\n  email\n  isManager\n  joinDate\n  position {\n    id\n    position\n  }\n  team {\n    id\n    team\n  }\n}\n\nfragment ShowUserPosts_post on User {\n  posts {\n    ...PostTableContent_post\n    id\n  }\n  likes {\n    id\n    post {\n      ...PostTableContent_post\n      id\n    }\n  }\n  comments {\n    id\n    post {\n      ...PostTableContent_post\n      id\n    }\n    content\n  }\n}\n\nfragment ShowUserVacationsHistory_vacation on Vacation {\n  id\n  startDate\n  endDate\n  duration\n  isHalf\n  confirmed {\n    byCeo\n    byManager\n    byLeader\n  }\n}\n\nfragment ShowUserVacations_vacation on User {\n  availableVacation\n  vacations {\n    ...ShowUserVacationsHistory_vacation\n    id\n  }\n}\n\nfragment SurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  user {\n    id\n    name\n  }\n  isAnswered\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "c1f777283a2e18040bcc2b87b55b418b";

export default node;
