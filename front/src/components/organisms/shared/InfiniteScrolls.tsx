import styled from "@emotion/styled";
import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  useTransition,
} from "react";
import { LoadMoreFn, RefetchFnDynamic } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../../utils/constants/share.constant";
import { useInfiniteScroll } from "../../../utils/hooks/scroll/infiniteScroll.hook";
import Table from "../../molecules/tables/Table";
import { GapBox, ListBox, ScrollBox } from "../../atomics/boxes/Boxes";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { Section } from "../../atomics/sections/sections";
import DataToolBar from "../../molecules/inputs/DataToolBar";

export const ObserveBox = styled.div`
  height: 30px;
`;

interface IInfiniteScroll {
  children: React.ReactNode;
  hasNext?: boolean;
  isLoadingNext?: boolean;
  loadNext: LoadMoreFn<any>;
}

interface ISearchAndInfiniteScrollDataList extends IInfiniteScroll {
  refetch: RefetchFnDynamic<any, any, Options>;
  mutateName?: string;
}

// Search, Pagination(Infinite Scroll) 구현하는 컴포넌트
export const SearchAndInfiniteScrollDataList = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  refetch,
  mutateName,
}: ISearchAndInfiniteScrollDataList) => {
  // 스크롤이 바닥에 닿았는지 감지해서 relay의 loadNext를 실행시키는 훅
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    console.log(hasNext, isLoadingNext);
    if (hasNext && !isLoadingNext) {
      loadNext(PAGINATION_LOAD_COUNT);
    }
  });

  // keyword가 변화할 때 마다 refetch하는 기능(검색 기능)
  const [keyword, setKeyword] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    startTransition(() => setKeyword(event.currentTarget.value));

  useEffect(() => {
    // keyword를 최초에 빈 string이 아니라 undefined으로 두고 아래처럼 코드를 써야 mount 에러가 안남
    // keyword를 빈 string으로 두고 if조건으로 !!keyword로 쓰면 keyword가 없을 때 이 조건에 해당하지 않아서 refetch가 실행되지 않아 다시 모든 데이터를 가져오지 않음
    // 따라서 keyword를 최초값을 undefined으로 두고 아래처럼 조건을 써서 빈 string일 때에는 refetch가 발생하게 함
    if (keyword !== undefined) {
      refetch({
        keyword,
      });
    }
  }, [keyword]);
  return (
    <>
      <GapBox>
        <Section>
          <DataToolBar onChange={handleChange} mutateName={mutateName} />
        </Section>
        <ListBox>{children}</ListBox>
        {(isLoadingNext || isPending) && <p>기다려바</p>}
      </GapBox>
      <ObserveBox ref={ref} />
    </>
  );
};

interface IInfiniteScrollDataTable extends IInfiniteScroll {
  headers: string[];
}
export const InfiniteScrollDataTable = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  headers,
}: IInfiniteScrollDataTable) => {
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    console.log(hasNext, isLoadingNext);
    if (hasNext && !isLoadingNext) {
      loadNext(PAGINATION_LOAD_COUNT);
    }
  });

  return (
    <>
      <Table headers={headers}>{children}</Table>
      {isLoadingNext && <p>기다려바</p>}

      <ObserveBox ref={ref} />
    </>
  );
};

interface IScrollList extends IInfiniteScroll {
  direction?: string;
}
export const InfiniteScrollList = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  direction = "column",
}: IScrollList) => {
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    console.log(hasNext, isLoadingNext);
    if (hasNext && !isLoadingNext) {
      loadNext(PAGINATION_LOAD_COUNT);
    }
  });

  return (
    <>
      {direction === "reverse" && <ObserveBox ref={ref} />}
      {direction === "reverse" && isLoadingNext && <p>기다려바</p>}

      <ScrollBox
        height="100%"
        style={{
          flexDirection: direction === "reverse" ? "column-reverse" : "column",
        }}
      >
        {children}
      </ScrollBox>
      {direction !== "reverse" && <ObserveBox ref={ref} />}

      {direction !== "reverse" && isLoadingNext && <p>기다려바</p>}
    </>
  );
};
