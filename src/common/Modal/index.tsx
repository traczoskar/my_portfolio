import { CloseButton, ModalContent, ModalOverlay } from "./styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
