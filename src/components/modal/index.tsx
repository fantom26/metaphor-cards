import { FC, ReactNode, useEffect } from "react";

import { CloseButton } from "@/components/close-button";
import { Portal } from "@/components/portal";
import { useScrollLock } from "@/hooks";

import "./modal.scss";

interface IWrapper {
  children: ReactNode;
}

export interface ModalProps extends IWrapper {
  open: boolean;
  width?: number;
  onClose: () => void;
}

interface HeaderProps extends IWrapper {
  onClose: () => void;
}

export const ModalRoot: FC<ModalProps> = ({
  children,
  open,
  onClose,
  width = 58.5
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const styles: Record<string, string> = {
    "--width": `${width}rem`
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const isBodyLocked = document.body.classList.contains("lock");

    if (!isBodyLocked) {
      lockScroll();
    }

    return () => {
      if (!isBodyLocked) {
        unlockScroll();
      }
    };
  }, [open]);

  return (
    <Portal>
      <dialog className="modal" open={open} onClose={onClose}>
        <div style={styles} role="dialog" aria-modal="true">
          <div className="modal__container">
            <div className="modal__root">{children}</div>
          </div>
        </div>
      </dialog>
    </Portal>
  );
};

export const ModalHeader = ({ children, onClose }: HeaderProps) => (
  <div className="modal__header">
    {children}
    <CloseButton onClick={onClose} aria-label="Close modal" />
  </div>
);

export const ModalContent = ({ children }: IWrapper) => (
  <div className="modal__content">{children}</div>
);

export const ModalActions = ({ children }: IWrapper) => (
  <div className="modal__actions">{children}</div>
);
