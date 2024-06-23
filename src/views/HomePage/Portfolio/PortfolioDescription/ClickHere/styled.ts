import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.projects.clickHere.background};
  color: ${({ theme }) => theme.colors.projects.clickHere.text};
  border: 0.75px solid ${({ theme }) => theme.colors.projects.clickHere.border};
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(85%);
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobileMax}) {
    font-size: 3vw;
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
