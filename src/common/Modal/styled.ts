import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.projectDetails.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.projectDetails.background};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  background-color: #dddddd;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #bbbbbb;
  }
`;

export const ThemeSwitchModalContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0.25rem;
`;
