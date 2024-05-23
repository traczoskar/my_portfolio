import { ThemeSwitch } from "../ThemeSwitch";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ThemeSwitchModalContainer,
} from "./styled";

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
        <ThemeSwitchModalContainer>
          <ThemeSwitch />
        </ThemeSwitchModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
