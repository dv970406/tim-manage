/**
 * @generated SignedSource<<20bf9b3708d5a17bdec3badb6e40b58c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetMyAllInfoQuery$variables = {
  after?: any | null;
  first: number;
  keyword?: string | null;
};
export type GetMyAllInfoQuery$data = {
  readonly getMyInfo: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"ShowUserAnswers_answer" | "ShowUserComments_comment" | "ShowUserInfo_user" | "ShowUserLikes_like" | "ShowUserPosts_post" | "ShowUserVacations_vacation">;
    } | null;
  };
};
export type GetMyAllInfoQuery = {
  response: GetMyAllInfoQuery$data;
  variables: GetMyAllInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "keyword"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v8 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v9 = [
  (v7/*: any*/),
  (v8/*: any*/),
  {
    "kind": "Variable",
    "name": "keyword",
    "variableName": "keyword"
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isLiked",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countLikes",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countComments",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v19 = [
  "keyword"
],
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "Post",
  "kind": "LinkedField",
  "name": "post",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/),
    (v14/*: any*/),
    (v15/*: any*/)
  ],
  "storageKey": null
},
v21 = [
  (v7/*: any*/),
  (v8/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetMyAllInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetMyInfoOutput",
        "kind": "LinkedField",
        "name": "getMyInfo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
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
                "name": "ShowUserComments_comment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ShowUserLikes_like"
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetMyAllInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetMyInfoOutput",
        "kind": "LinkedField",
        "name": "getMyInfo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
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
                  (v5/*: any*/),
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
                  (v5/*: any*/),
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
                "args": (v9/*: any*/),
                "concreteType": "PostsConnection",
                "kind": "LinkedField",
                "name": "myPostsConnection",
                "plural": false,
                "selections": [
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
                          (v5/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": (v19/*: any*/),
                "handle": "connection",
                "key": "ShowUserPosts_myPostsConnection",
                "kind": "LinkedHandle",
                "name": "myPostsConnection"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "CommentsConnection",
                "kind": "LinkedField",
                "name": "myCommentsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": (v19/*: any*/),
                "handle": "connection",
                "key": "ShowUserComments_myCommentsConnection",
                "kind": "LinkedHandle",
                "name": "myCommentsConnection"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "LikesConnection",
                "kind": "LinkedField",
                "name": "myLikesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LikeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Like",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": (v19/*: any*/),
                "handle": "connection",
                "key": "ShowUserLikes_myLikesConnection",
                "kind": "LinkedHandle",
                "name": "myLikesConnection"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "AnswersConnection",
                "kind": "LinkedField",
                "name": "myAnswersConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnswerEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Answer",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
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
                              (v5/*: any*/),
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
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isAnswered",
                                "storageKey": null
                              },
                              (v15/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": (v19/*: any*/),
                "handle": "connection",
                "key": "ShowUserAnswers_myAnswersConnection",
                "kind": "LinkedHandle",
                "name": "myAnswersConnection"
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
                "args": (v21/*: any*/),
                "concreteType": "VacationsConnection",
                "kind": "LinkedField",
                "name": "myVacationsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VacationEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Vacation",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
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
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ShowUserVacations_myVacationsConnection",
                "kind": "LinkedHandle",
                "name": "myVacationsConnection"
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
    "cacheID": "d4f1379b4cbe188fabe53830b974358d",
    "id": null,
    "metadata": {},
    "name": "GetMyAllInfoQuery",
    "operationKind": "query",
    "text": "query GetMyAllInfoQuery(\n  $keyword: String\n  $first: Int!\n  $after: DateTime\n) {\n  getMyInfo {\n    ok\n    error\n    user {\n      ...ShowUserInfo_user\n      ...ShowUserPosts_post\n      ...ShowUserComments_comment\n      ...ShowUserLikes_like\n      ...ShowUserAnswers_answer\n      ...ShowUserVacations_vacation\n      id\n    }\n  }\n}\n\nfragment PostTableContent_post on Post {\n  id\n  title\n  user {\n    id\n    name\n  }\n  isLiked\n  countLikes\n  countComments\n  createdAt\n}\n\nfragment ShowUserAnswers_answer on User {\n  myAnswersConnection(keyword: $keyword, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        results\n        survey {\n          ...SurveyTableContent_survey\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ShowUserComments_comment on User {\n  myCommentsConnection(keyword: $keyword, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        post {\n          ...PostTableContent_post\n          id\n        }\n        content\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ShowUserInfo_user on User {\n  id\n  name\n  email\n  isManager\n  joinDate\n  position {\n    id\n    position\n  }\n  team {\n    id\n    team\n  }\n}\n\nfragment ShowUserLikes_like on User {\n  myLikesConnection(keyword: $keyword, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        post {\n          ...PostTableContent_post\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ShowUserPosts_post on User {\n  myPostsConnection(keyword: $keyword, first: $first, after: $after) {\n    edges {\n      node {\n        ...PostTableContent_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ShowUserVacations_vacation on User {\n  availableVacation\n  myVacationsConnection(first: $first, after: $after) {\n    edges {\n      node {\n        ...UserVacationTableContent_vacation\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment SurveyTableContent_survey on Survey {\n  id\n  surveyTitle\n  isAnonymous\n  user {\n    id\n    name\n  }\n  isAnswered\n  createdAt\n}\n\nfragment UserVacationTableContent_vacation on Vacation {\n  id\n  startDate\n  endDate\n  duration\n  isHalf\n  confirmed {\n    byCeo\n    byManager\n    byLeader\n  }\n}\n"
  }
};
})();

(node as any).hash = "6214dc167f120fd152fc74d010c719a1";

export default node;
