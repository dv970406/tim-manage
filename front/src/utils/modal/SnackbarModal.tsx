import styled from "@emotion/styled";
import reactDom from "react-dom";
import { ModalDialog } from "../../components/atomics/sections/sections";

interface ISnackbarModal {
  message: string;
}
const SnackbarModal = ({ message }: ISnackbarModal) => {
  const content = <ModalDialog>{message}</ModalDialog>;
  return reactDom.createPortal(
    content,
    document.querySelector("#snackbar") as HTMLElement
  );
};

export default SnackbarModal;
