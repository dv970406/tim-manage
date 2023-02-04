/**
 * @generated SignedSource<<8af1a7a7cf905d38d001794f6c4fcc12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetUserQuery$variables = {
  id: string;
};
export type GetUserQuery$data = {
  readonly getUser: {
    readonly error: string | null;
    readonly ok: boolean;
    readonly user: {
      readonly answers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly attendedMeetings: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly availableVacation: string;
      readonly comments: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly email: string;
      readonly hostedMeetingsByMe: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
      readonly isManager: boolean;
      readonly joinDate: any;
      readonly likes: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly name: string;
      readonly position: {
        readonly id: string;
        readonly position: string;
      };
      readonly posts: ReadonlyArray<{
        readonly content: string;
        readonly id: string;
        readonly title: string;
      }>;
      readonly surveys: ReadonlyArray<{
        readonly id: string;
        readonly surveyTitle: string;
      }>;
      readonly team: {
        readonly id: string;
        readonly team: string;
      };
      readonly vacations: ReadonlyArray<{
        readonly id: string;
      }>;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": [
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
    "concreteType": "GetUserOutput",
    "kind": "LinkedField",
    "name": "getUser",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
              (v1/*: any*/),
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
              (v1/*: any*/),
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
            "name": "name",
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
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Meeting",
            "kind": "LinkedField",
            "name": "attendedMeetings",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Meeting",
            "kind": "LinkedField",
            "name": "hostedMeetingsByMe",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "posts",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Like",
            "kind": "LinkedField",
            "name": "likes",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Survey",
            "kind": "LinkedField",
            "name": "surveys",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "surveyTitle",
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
            "selections": (v2/*: any*/),
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
    "name": "GetUserQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetUserQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b69ff0934a2ebcfe732e2e56546089b3",
    "id": null,
    "metadata": {},
    "name": "GetUserQuery",
    "operationKind": "query",
    "text": "query GetUserQuery(\n  $id: ID!\n) {\n  getUser(input: {id: $id}) {\n    ok\n    error\n    user {\n      id\n      email\n      isManager\n      joinDate\n      position {\n        id\n        position\n      }\n      team {\n        id\n        team\n      }\n      name\n      availableVacation\n      vacations {\n        id\n      }\n      attendedMeetings {\n        id\n      }\n      hostedMeetingsByMe {\n        id\n      }\n      posts {\n        id\n        title\n        content\n      }\n      likes {\n        id\n      }\n      comments {\n        id\n      }\n      surveys {\n        id\n        surveyTitle\n      }\n      answers {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ce820095fedbbfdcd880b16da20db60";

export default node;
