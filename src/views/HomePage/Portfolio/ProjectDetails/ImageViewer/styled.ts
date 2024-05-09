import styled from "styled-components";

export const ViewerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  cursor: zoom-out;
`;

export const UserInstruction = styled.p`
  position: absolute;
  top: 0;
  font-weight: 500;
  margin: 1rem 0 0 0;
  background: #111111;
  color: #cccccc;
  border-radius: 0.5rem;
  border: 1px solid #888888;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 2rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  cursor: zoom-out;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: zoom-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  background-color: #555555;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
  color: white;

  &:hover {
    background-color: #777777;
    transform: scale(1.1);
  }
`;
