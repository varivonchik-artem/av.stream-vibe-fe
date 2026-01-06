import React from "react";
import clx from "classnames";
import "./Modal.scss";

interface ModalProps {
  className?: string;

  children?: React.ReactNode;

  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen } = props;

  return (
    <div className={clx(className, "modal", { modal_opened: isOpen })}>
      <div className="modal__overlay">
        <div className="modal__close-button-wrapper"></div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
