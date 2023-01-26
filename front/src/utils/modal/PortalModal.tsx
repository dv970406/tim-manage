import React from "react";
import reactDom from "react-dom";

interface IPortalModal {
  children: React.ReactNode;
}
const PortalModal = ({ children }: IPortalModal) => {
  const el = document.getElementById("modal-root") as HTMLElement;

  return reactDom.createPortal(children, el);
};

export default PortalModal;
