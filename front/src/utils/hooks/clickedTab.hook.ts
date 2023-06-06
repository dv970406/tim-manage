import { useContext } from "react";
import { SideBarContext } from "../contexts/sidebar.context";

// 자신이 클릭한 메뉴 탭이 어떤 탭인지 저장해놓는 훅
export const useClickedTab = (tabName: string) => {
  const { clickedTabs, setClickedTabs } = useContext(SideBarContext);

  const isTabClicked = clickedTabs.includes(tabName);

  // 탭을 끄고 켤 수 있는 함수
  const controlClickedTab = () => {
    if (isTabClicked) {
      setClickedTabs((prev) => {
        const copiedClickedTabs = [...prev];
        const tabIndex = copiedClickedTabs.findIndex(
          (clickedTabName) => clickedTabName === tabName
        );
        copiedClickedTabs.splice(tabIndex, 1);
        return copiedClickedTabs;
      });
    } else {
      setClickedTabs((prev) => [...prev, tabName]);
    }
  };

  return { isTabClicked, controlClickedTab };
};
