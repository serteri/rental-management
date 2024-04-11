import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const menu = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        menu.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={menu}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
