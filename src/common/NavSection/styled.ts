import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Burger } from "../../assets/icons/burger_icon.svg";

//---Wrappers---

export const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 1.5rem 5vw;
  }
`;

//---Main Logo Link---

export const NavHeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
  &:active {
    filter: brightness(130%);
  }
`;

export const NavHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.005rem;
  padding: 0.5rem 0;
  filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};

    .logo-fill {
      fill: ${({ theme }) => theme.colors.basic};
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

//---Nav Links List---

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 0.05rem;
  font-size: 1.1rem;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const NavHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.basic};
    transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover::before {
    left: 0;
  }

  &:not(:hover)::before {
    right: -100%;
  }

  &:visited {
    color: inherit;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 1rem 0.5rem;
  }
`;

export const NavRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.basic};
    transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover::before {
    left: 0;
  }

  &:not(:hover)::before {
    right: -100%;
  }

  &:visited {
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 1rem 0.5rem;
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

export const NavIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 1rem 0.5rem;
  }
`;

//---Mobile Menu---

export const BurgerMenu = styled.div`
  display: none;
  color: inherit;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: flex;
  }
`;

export const BurgerIcon = styled(Burger)`
  width: 40px;
  height: 40px;
`;
