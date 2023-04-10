import { PAGINATION_LOAD_COUNT } from "../../../utils/constants/share.constant";
import { useInfiniteScroll } from "../../../utils/hooks/scroll/infiniteScroll.hook";
import { ScrollBox } from "../../atomics/boxes/ListBox";
import Loading from "../../molecules/shared/Loading";
import { IInfiniteScroll, ObserveBox } from "./SearchAndInfiniteScrollList";

interface IInfiniteScrollList extends IInfiniteScroll {
  direction?: string;
}
export const InfiniteScrollList = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  direction = "column",
}: IInfiniteScrollList) => {
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNext && !isLoadingNext) {
      loadNext(PAGINATION_LOAD_COUNT);
    }
  });

  return (
    <>
      <ScrollBox
        style={{
          flexDirection: direction === "reverse" ? "column-reverse" : "column",
        }}
      >
        {direction === "reverse" && isLoadingNext && <Loading />}
        {children}
        {direction !== "reverse" && isLoadingNext && <Loading />}
        <ObserveBox ref={ref} />
      </ScrollBox>
    </>
  );
};
