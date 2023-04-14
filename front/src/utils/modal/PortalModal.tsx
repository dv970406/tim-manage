import React, { MouseEventHandler } from "react";
import reactDom from "react-dom";
import {
  ModalBackground,
  ModalSection,
} from "../../components/atomics/boxes/Modal";

interface IPortalModal {
  children: React.ReactNode;
  onClose: () => void;
}
const PortalModal = ({ children, onClose }: IPortalModal) => {
  // dialog backdrop을 클릭하면 꺼지게 하는 코드
  const closeModalWhenClickBg: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget === event.target) onClose();
  };

  const content = (
    <ModalBackground onClick={closeModalWhenClickBg}>
      <ModalSection>{children}</ModalSection>
    </ModalBackground>
  );
  return reactDom.createPortal(
    content,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default PortalModal;
