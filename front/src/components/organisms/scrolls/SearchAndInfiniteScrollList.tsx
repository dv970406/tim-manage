import styled from "@emotion/styled";
import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  useTransition,
} from "react";
import { LoadMoreFn, RefetchFnDynamic } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../../utils/constants/share.constant";
import { useInfiniteScroll } from "../../../utils/hooks/shared/infiniteScroll.hook";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { Section } from "../../atomics/boxes/Sections";
import DataToolBar from "./DataToolBar";
import { theme } from "../../../css/theme";
import Loading from "../../molecules/shared/Loading";
import { ColumnBox } from "../../atomics/boxes/FlexBox";
import { ScrollBox } from "../../atomics/boxes/ScrollBox";
import { GridBox } from "../../atomics/boxes/GridBox";

export const ObserveBox = styled.div`
  height: 5px;
`;

export interface IInfiniteScroll {
  children: React.ReactNode;
  hasNext?: boolean;
  isLoadingNext?: boolean;
  loadNext: LoadMoreFn<any>;
}

interface ISearchAndInfiniteScrollList extends IInfiniteScroll {
  refetch: RefetchFnDynamic<any, any, Options>;
  mutateName?: string;
  noGrid?: boolean;
  openModal?: () => void;
}

// Search, Pagination(Infinite Scroll) 구현하는 컴포넌트
export const SearchAndInfiniteScrollList = ({
  children,
  hasNext,
  isLoadingNext,
  loadNext,
  refetch,
  noGrid,
  openModal,
}: ISearchAndInfiniteScrollList) => {
  // 스크롤이 바닥에 닿았는지 감지해서 relay의 loadNext를 실행시키는 훅
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);

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
      <ColumnBox gap={theme.spacing.xl}>
        <Section padding={theme.spacing.md}>
          <DataToolBar onChange={handleChange} openModal={openModal} />
        </Section>
        {noGrid ? (
          <ScrollBox>{children}</ScrollBox>
        ) : (
          <GridBox>{children}</GridBox>
        )}

        {(isLoadingNext || isPending) && <Loading />}
      </ColumnBox>
      <ObserveBox ref={ref} />
    </>
  );
};
