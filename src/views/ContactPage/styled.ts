import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const ContactPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  max-width: 1200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 0 5vw;
  }
`;

export const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  line-height: 1.5;
  margin: 2rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 2rem 0 0 0;
    font-size: 7vw;
  }
`;

export const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.contactPage.special};
`;

export const ContactLinks = styled.address`
  font-style: normal;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 3rem 0 1rem 0;
    flex-direction: column;
    gap: 1rem;
  }
`;

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

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1.5px solid ${({ theme }) => theme.colors.contactPage.linkBorder};
  border-radius: 3.5rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
    border: 1.5px solid ${({ theme }) => theme.colors.contactPage.special};
    svg {
      color: ${({ theme }) => theme.colors.contactPage.special};
      animation: ${animatespin3d} 0.6s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.9);
    background-color: #cccccc;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      background-color: #999999;
    }
  }

  svg {
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobileMax}) {
    font-size: 4.2vw;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
