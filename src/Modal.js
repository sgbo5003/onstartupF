import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, fade = false, isOpen, setIsOpen }, ref) => {
  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className="modal_cover">
        <div className="join_member_checked_qna_cove_on" onClick={close}>
          <div className="join_member_qna_checked_popup">
            <div>{children}</div>
          </div>
        </div>
      </div>
    ) : null,
    document.getElementById("modal_root")
  );
};

export default forwardRef(Modal);
