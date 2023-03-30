// "use client";
import React, { Suspense } from "react";
import SummaryInfo from "../src/components/organisms/content/SummaryInfo";
import { faFolder } from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../src/css/theme";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

const users = graphql`
  query pageGetUsersQuery {
    getUsers {
      ok
      users {
        id
        name
        email
      }
    }
  }
`;
export default function Page() {
  const data = useLazyLoadQuery(users, {});
  console.log(data);

  return (
    <Suspense fallback={"loading..."}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
          gap: theme.spacing.lg,
          width: "50%",
        }}
      >
        <SummaryInfo
          subTitle={`Today's Money`}
          text={"$53,000"}
          icon={faFolder}
        />
        <SummaryInfo
          subTitle={`Today's Money`}
          text={"$53,000"}
          icon={faFolder}
        />
        <SummaryInfo
          subTitle={`Today's Money`}
          text={"$53,000"}
          icon={faFolder}
        />
        <SummaryInfo
          subTitle={`Today's Money`}
          text={"$53,000"}
          icon={faFolder}
        />
      </div>
    </Suspense>
  );
}
