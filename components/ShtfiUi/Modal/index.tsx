import { ModalProps } from "../types";
import { useState } from "react";
import { Button } from "components";

const Modal: React.FC<ModalProps> = ({
  open = false,
  toggleCallback,
  buttonProps,
  buttonLabel,
  wrapperProps,
  underlayProps,
  children,
  ...rest
}) => {
  // If we have no children exit as modal is pointless
  if (!!!children) {
    return null;
  }
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleToggle: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const typedTarget = e.target as HTMLElement;
    const dataAttr = typedTarget.getAttribute("data-type");
    // The event didn't stem from our desired components
    if (!!!dataAttr) return;
    // Ensure it was either the close button or underlay which triggered the event
    if (dataAttr !== "underlay" && dataAttr !== "modal-close") return;
    // Toggle the modal
    setIsOpen(!isOpen);
    // Call the callback
    if (!!toggleCallback) {
      toggleCallback(e);
    }
  };

  return (
    <>
      <Button {...buttonProps}>{!!buttonLabel ? buttonLabel : "Open"}</Button>
      <div
        data-type="wrapper"
        aria-hidden={!isOpen}
        onClick={handleToggle}
        {...wrapperProps}
      >
        <span data-type="underlay" {...underlayProps}></span>
        <div {...rest}>
          <button data-type="modal-close"></button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
