import styled from "styled-components";

interface ThemeSwitchModalContainerProps {
  $top?: string | false;
  $right?: string | false;
}

interface ModalOverlayProps {
  $isImageViewerOpen?: boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.projectDetails.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 800;
  backdrop-filter: blur(5px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    position: ${({ $isImageViewerOpen }) =>
      $isImageViewerOpen ? "fixed" : "relative"};
  }
`;

export const ModalContent = styled.section`
  background: ${({ theme }) => theme.colors.projectDetails.background};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    max-width: 100%;
    max-height: 100%;
    position: relative;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 2rem;
  right: 2rem;
  font-size: 1rem;
  background-color: #dddddd;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
  z-index: 50;

  &:hover {
    background-color: #bbbbbb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    top: 1rem;
    right: 1rem;
  }
`;

export const ThemeSwitchModalContainer = styled.div<ThemeSwitchModalContainerProps>`
  z-index: 50;
  position: absolute;
  top: ${({ $top }) => $top || "5rem"};
  right: ${({ $right }) => $right || "1.25rem"};
`;
