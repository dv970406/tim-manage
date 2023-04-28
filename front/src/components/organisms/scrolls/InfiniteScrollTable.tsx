import { PAGINATION_LOAD_COUNT } from "../../../utils/constants/share.constant";
import { useInfiniteScroll } from "../../../utils/hooks/shared/infiniteScroll.hook";
import { ScrollBox } from "../../atomics/boxes/ScrollBox";
import Loading from "../../molecules/shared/Loading";
import { Table } from "../../molecules/tables/Table";
import { IInfiniteScroll, ObserveBox } from "./SearchAndInfiniteScrollList";

interface IInfiniteScrollTable extends IInfiniteScroll {
  headers: string[];
}
export const InfiniteScrollTable = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  headers,
}: IInfiniteScrollTable) => {
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNext && !isLoadingNext) {
      loadNext(PAGINATION_LOAD_COUNT);
    }
  });

  return (
    <ScrollBox>
      <Table headers={headers}>{children}</Table>
      {isLoadingNext && <Loading />}

      <ObserveBox ref={ref} />
    </ScrollBox>
  );
};
