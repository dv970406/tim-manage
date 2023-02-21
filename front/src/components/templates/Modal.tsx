import React, { MouseEventHandler, useContext } from "react";
import { ModalDialog } from "../atomics/sections/sections";
import PortalModal from "../../utils/modal/PortalModal";
import { closeModal } from "../../utils/modal/controlModal";

interface IModal {
  children: React.ReactNode;
  modalName: string;
}

const Modal = ({ children, modalName }: IModal) => {
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
  return (
    <PortalModal>
      <ModalDialog
        onClick={closeModalWhenClickBg}
        id={`${modalName}-modal`}
        // esc 눌러서 닫을 때 작동하는 이벤트
        onClose={() => closeModal(modalName)}
      >
        {children}
      </ModalDialog>
      {/* <ModalBackground onClick={closeModal}>
        <ModalSection onClick={preventEventBubbling}>{children}</ModalSection>
      </ModalBackground> */}
    </PortalModal>
  );
};

export default Modal;
