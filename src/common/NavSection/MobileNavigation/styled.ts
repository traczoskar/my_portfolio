import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface MobileNavLinkProps {
  isOpen: boolean;
}

export const MobileNavLinks = styled.ul<MobileNavLinkProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 10rem 4rem 0 4rem;
  font-weight: 300;
  font-size: 1.2rem;
  gap: 2.5rem;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.app.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

export const MobileNavLogo = styled(Link)`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  text-decoration: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.basic};

    .logo-stroke {
      stroke: ${({ theme }) => theme.colors.basic};
    }
  }

  &:active {
    transform: scale(0.9);
    filter: brightness(90%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.3rem;
    gap: 0.75rem;
  }
`;

export const MobileRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const MobileHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }

  &:active {
    transform: scale(0.9);
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

export const MobileIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  color: inherit;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    svg {
      color: ${({ theme }) => theme.colors.basic};
      animation: ${animatespin3d} 0.8s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &:visited {
    color: inherit;
  }

  svg {
    transition: 0.3s;
    width: 100%;
    height: 100%;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
