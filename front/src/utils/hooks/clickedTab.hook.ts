import { useContext } from "react";
import { SideBarContext } from "../contexts/sidebar.context";

export const useClickedTab = (tabName: string) => {
  const { clickedTabs, setClickedTabs } = useContext(SideBarContext);

  const isTabClicked = clickedTabs.includes(tabName);

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
