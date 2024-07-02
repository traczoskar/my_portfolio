import { useMediaQuery } from "react-responsive";
import { ThemeSwitch } from "../ThemeSwitch";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ThemeSwitchModalContainer,
} from "./styled";

interface ModalProps {
  isOpen: boolean;
  isImageViewerOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  isImageViewerOpen,
}: ModalProps) => {
  const isTablet: boolean = useMediaQuery({
    query: `(max-width: 1199px)`,
  });
  if (!isOpen) return null;

  return (
    <ModalOverlay $isImageViewerOpen={isImageViewerOpen}>
      <ModalContent aria-expanded="true">
        <ThemeSwitchModalContainer
          $top={isTablet && "0.8rem"}
          $right={isTablet && "3.7rem"}
        >
          <ThemeSwitch />
        </ThemeSwitchModalContainer>
        <CloseButton aria-label="Close Project Details" onClick={onClose}>
          X
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
