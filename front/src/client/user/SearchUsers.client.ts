// import { graphql } from "babel-plugin-relay/macro";
// import { useState } from "react";
// import { useLazyLoadQuery } from "react-relay";
// import { SearchUsersQuery } from "./__generated__/SearchUsersQuery.graphql";

// export const searchUsersQuery = graphql`
//   query SearchUsersQuery($keyword: String) {
//     searchUsers(keyword: $keyword) {
//       ok
//       error
//       # users {
//       #   id
//       #   name
//       # }
//     }
//   }
// `;

// export const useSearchUsers = () => {
//   const [keyword, setKeyword] = useState("");
//   const {
//     searchUsers: { ok, error /* users: searchUsers  */ },
//   } = useLazyLoadQuery<SearchUsersQuery>(searchUsersQuery, {
//     keyword,
//   });
//   if (!ok) {
//     alert(error);
//   }

//   return { /* searchUsers */ setKeyword };
// };

export const useSearchUsers = () => {};
