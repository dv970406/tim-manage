import { createContext, Dispatch, SetStateAction } from "react";

export interface IModalContext {
  currentModal: string;
  setCurrentModal: Dispatch<SetStateAction<string>>;
}
export const ModalContext = createContext<IModalContext>({
  currentModal: "",
  setCurrentModal: () => {},
});
