import {
  faComment,
  faHeart,
  faNewspaper,
} from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { RefetchFnDynamic } from "react-relay";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { theme } from "../../../../css/theme";
import { RowBox } from "../../../atomics/boxes/Boxes";
import { Section } from "../../../atomics/sections/sections";
import { IconButton } from "../../../molecules/buttons/IconButton";
import { PostsTablePaginationQuery } from "../../../templates/content/post/__generated__/PostsTablePaginationQuery.graphql";
import { PostsTable_post$key } from "../../../templates/content/post/__generated__/PostsTable_post.graphql";

interface IOrderPosts {
  refetch: RefetchFnDynamic<
    PostsTablePaginationQuery,
    PostsTable_post$key,
    Options
  >;
}

interface IOrders {
  order1?: string[];
  order2?: string[];
  order3?: string[];
}

const OrderPosts = ({ refetch }: IOrderPosts) => {
  const [orders, setOrders] = useState<IOrders | null>(null);

  const [clickedTab, setClickedTab] = useState("recent");

  const handleOrder = (order: string) => {
    setClickedTab(order);
    setOrders({ order1: [order] });
  };

  useEffect(() => {
    if (!orders) return;
    refetch({ orders });
  }, [orders]);
  return (
    <Section>
      <RowBox style={{ justifyContent: "center", alignItems: "center" }}>
        <IconButton
          onClick={() => handleOrder("recent")}
          color={
            clickedTab === "recent" ? theme.colors.purple : theme.colors.white
          }
          icon={faNewspaper}
        />
        <IconButton
          onClick={() => handleOrder("like")}
          color={
            clickedTab === "like" ? theme.colors.purple : theme.colors.white
          }
          icon={faHeart}
        />
        <IconButton
          onClick={() => handleOrder("comment")}
          color={
            clickedTab === "comment" ? theme.colors.purple : theme.colors.white
          }
          icon={faComment}
        />
      </RowBox>
    </Section>
  );
};

export default OrderPosts;
