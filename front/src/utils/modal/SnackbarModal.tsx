import reactDom from "react-dom";
import { ModalSection } from "../../components/atomics/boxes/Modal";

interface ISnackbarModal {
  message: string;
}
const SnackbarModal = ({ message }: ISnackbarModal) => {
  const content = <ModalSection>{message}</ModalSection>;
  return reactDom.createPortal(
    content,
    document.querySelector("#snackbar") as HTMLElement
  );
};

export default SnackbarModal;
