import { createContext, Dispatch, SetStateAction } from "react";

export interface ISideBarContext {
  clickedTabs: string[];
  setClickedTabs: Dispatch<SetStateAction<string[]>>;
}
export const SideBarContext = createContext<ISideBarContext>({
  clickedTabs: [],
  setClickedTabs: () => {},
});
