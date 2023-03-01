import React, { MouseEventHandler } from "react";
import reactDom from "react-dom";
import { ModalDialog } from "../../components/atomics/sections/sections";
import { closeModal } from "./controlModal";
interface IPortalModal {
  children: React.ReactNode;
  modalName: string;
}
const PortalModal = ({ children, modalName }: IPortalModal) => {
  // dialog backdrop을 클릭하면 꺼지게 하는 코드
  const closeModalWhenClickBg: MouseEventHandler<HTMLDialogElement> = (
    event
  ) => {
    const dialog = document.getElementById(
      `${modalName}-modal`
    ) as HTMLDialogElement;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      closeModal(modalName);
    }
  };

  const content = (
    <ModalDialog
      onClick={closeModalWhenClickBg}
      id={`${modalName}-modal`}
      // esc 눌러서 닫을 때 작동하는 이벤트
      onClose={() => closeModal(modalName)}
    >
      {children}
    </ModalDialog>
  );
  return reactDom.createPortal(
    content,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default PortalModal;
