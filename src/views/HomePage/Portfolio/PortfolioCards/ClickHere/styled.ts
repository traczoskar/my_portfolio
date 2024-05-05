import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: -460px;
  right: 18px;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: #ffffff;
  color: #555555;
  border: 1px solid #888888;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: orange;
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  25% {
    transform: translateX(-5px) rotate(-5deg);
  }
  50% {
    transform: translateX(5px) rotate(5deg);
  }
  75% {
    transform: translateX(-5px) rotate(-5deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

export const AnimatedDiv = styled.div`
  margin: 0;
  padding: 0;
  animation: ${arrowAnimation} 1s ease-in-out infinite;
`;
