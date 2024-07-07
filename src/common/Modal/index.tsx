import { useMediaQuery } from "react-responsive";
import { ThemeSwitch } from "../ThemeSwitch";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  SwitchesContainer,
} from "./styled";
import LanguageSwitch from "../LanguageSwitch";

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
  const isTabletHorizontal: boolean = useMediaQuery({
    query: `(max-width: 1199px)`,
  });
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  if (!isOpen) return null;

  return (
    <ModalOverlay $isImageViewerOpen={isImageViewerOpen}>
      <ModalContent aria-expanded="true">
        <SwitchesContainer
          $top={isTabletVertical ? "0.95rem" : isTabletHorizontal && "0.8rem"}
          $right={isMobile ? "4rem" : isTabletHorizontal && "4.5rem"}
        >
          <ThemeSwitch padding="0.5rem" />
          <LanguageSwitch isOnModal={true} />
        </SwitchesContainer>
        <CloseButton aria-label="Close Project Details" onClick={onClose}>
          X
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
