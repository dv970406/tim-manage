import {
  faComment,
  faHeart,
  faNewspaper,
} from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { RefetchFnDynamic } from "react-relay";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { theme } from "../../../../css/theme";
import { CenterBox } from "../../../atomics/boxes/FlexBox";
import { Section } from "../../../atomics/boxes/Sections";
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

const SORT = {
  RECENT: "recent",
  LIKE: "like",
  COMMENT: "comment",
};

const OrderPosts = ({ refetch }: IOrderPosts) => {
  const [orders, setOrders] = useState<IOrders | null>(null);

  const [clickedTab, setClickedTab] = useState(SORT.RECENT);

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
      <CenterBox>
        <IconButton
          onClick={() => handleOrder(SORT.RECENT)}
          color={
            clickedTab === SORT.RECENT
              ? theme.colors.purple
              : theme.colors.white
          }
          icon={faNewspaper}
        />
        <IconButton
          onClick={() => handleOrder(SORT.LIKE)}
          color={
            clickedTab === SORT.LIKE ? theme.colors.purple : theme.colors.white
          }
          icon={faHeart}
        />
        <IconButton
          onClick={() => handleOrder(SORT.COMMENT)}
          color={
            clickedTab === SORT.COMMENT
              ? theme.colors.purple
              : theme.colors.white
          }
          icon={faComment}
        />
      </CenterBox>
    </Section>
  );
};

export default OrderPosts;
