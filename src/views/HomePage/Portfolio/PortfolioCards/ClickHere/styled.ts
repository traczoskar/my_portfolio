import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: #f9ad66;
  border: 1px solid #888888;
  color: #333333;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(85%);
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  10% {
    transform: translateX(-5px) rotate(5deg);
  }
  20% {
    transform: translateX(5px) rotate(-5deg);
  }
  30% {
    transform: translateX(-5px) rotate(5deg);
  }
  50% {
    transform: translateX(0) rotate(0);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

export const AnimatedDiv = styled.div`
  margin: 0;
  padding: 0;
  animation: ${arrowAnimation} 4s ease-in-out infinite;
`;
