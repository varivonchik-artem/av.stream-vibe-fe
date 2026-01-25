import React from "react";
import { Portal } from "@shared/ui/Portal";
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

  React.useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.classList.add("is-lock");
    } else {
      html.classList.remove("is-lock");
    }

    return () => html.classList.remove("is-lock");
  }, [isOpen]);

  return (
    <Portal>
      <div className={clx(className, "modal", { modal_opened: isOpen })}>
        <div className="modal__overlay">
          <div className="modal__close-button-wrapper"></div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </Portal>
  );
};
