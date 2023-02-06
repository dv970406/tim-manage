import React, { useContext } from "react";
import { ModalBackground, ModalSection } from "../atomics/sections/sections";
import PortalModal from "../../utils/modal/PortalModal";
import { ModalContext } from "../../utils/contexts/modal.context";

interface IModal {
  children: React.ReactNode;
}

const Modal = ({ children }: IModal) => {
  // const [modalState, setModalState] = useRecoilState(modalStateRecoil);
  const { currentModal, setCurrentModal } = useContext(ModalContext);

  const closeModal = () => setCurrentModal("");

  // ModalSection 구역을 클릭한 경우 상위 요소의 이벤트인 closeModal이 번지지 않게하기 위함
  const preventEventBubbling = (event: any) => {
    event.stopPropagation();
  };

  return currentModal ? (
    <PortalModal>
      <ModalBackground onClick={closeModal}>
        <ModalSection onClick={preventEventBubbling}>{children}</ModalSection>
      </ModalBackground>
    </PortalModal>
  ) : (
    <></>
  );
};

export default Modal;
