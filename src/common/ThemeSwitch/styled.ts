import styled, { keyframes } from "styled-components";

const animatespin3d = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg) translateY(-5px);
  }
  100% {
    transform: rotateY(0deg) translateY(0px);
  }
`;

export const Button = styled.button`
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  border-radius: 0.25rem;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    svg {
      color: ${({ theme }) => theme.colors.themeSwitch.fill};
      animation: ${animatespin3d} 0.8s ease-in-out;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const IconWrapper = styled.div`
  background: inherit;
  display: flex;
  color: inherit;

  svg {
    transition: ease-in-out 0.3s;
  }
`;
