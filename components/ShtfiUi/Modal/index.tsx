import { ModalProps } from "../types";
import { useState } from "react";
import { Button } from "components";
import styled from "styled-components";

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
  const [isOpen, setIsOpen] = useState<boolean>(open);
  // If we have no children exit as modal is pointless
  if (!!!children) {
    return null;
  }

  const handleToggle: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const typedTarget = e.target as HTMLElement;
    const dataAttr = typedTarget.getAttribute("data-type");
    // The event didn't stem from our desired components
    if (!!!dataAttr) return;
    // Ensure it was either the close button or underlay which triggered the event
    if (
      dataAttr !== "underlay" &&
      dataAttr !== "modal-close" &&
      dataAttr !== "modal-open"
    )
      return;
    // Toggle the modal
    setIsOpen(!isOpen);
    // Call the callback
    if (!!toggleCallback) {
      toggleCallback(e);
    }
  };

  return (
    <>
      <Button data-type="modal-open" {...buttonProps} onClick={handleToggle}>
        {!!buttonLabel ? buttonLabel : "Open"}
      </Button>
      <StyledModalWrapper
        data-type="wrapper"
        aria-hidden={!isOpen}
        onClick={handleToggle}
        {...wrapperProps}
      >
        <StyledUnderlay data-type="underlay" {...underlayProps} />
        <StyledModal aria-hidden={!isOpen} {...rest}>
          {children}
          <Button size="med" data-type="modal-close" onClick={handleToggle}>
            Close
          </Button>
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
};

const StyledModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &[aria-hidden="true"] {
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease, max-height 0s 0.3s, visibility 0s 0.3s,
      z-index 0s 0.3s;
  }

  &[aria-hidden="false"] {
    z-index: 999;
    opacity: 1;
    transition: opacity 0.3s ease 0.1s, max-height 0s 0s, visibility 0s 0s,
      z-index 0s 0s;
  }
`;
const StyledUnderlay = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
`;
const StyledModal = styled.aside`
  top: 50%;
  left: 50%;
  background-color: var(--light);
  z-index: 999;
  position: absolute;
  padding: var(--large-space);
  border-radius: var(--radius-large);
  width: 95%;
  height: auto;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  color: var(--dark);

  &[aria-hidden="true"] {
    transform: translate(-50%, 100%);
    transition: transform 0.3s ease;
  }

  &[aria-hidden="false"] {
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease 0.1s;
  }

  > button:last-child {
    margin-top: var(--large-space);
  }
`;
export default Modal;
