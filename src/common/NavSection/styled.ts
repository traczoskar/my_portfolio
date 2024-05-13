import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
`;

export const NavHeaderLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  &:active {
    filter: brightness(130%);
  }
`;

export const NavHeader = styled.h1`
  display: flex;
  gap: 1.25rem;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.005rem;
  padding: 0.5rem 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-image: ${({ theme }) => theme.colors.header.text};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.05rem;
  padding: 0;
  margin: 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: #f9ad66;
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
`;

export const NavHashLink = styled(HashLink)`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: #f9ad66;
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
`;

export const NavRouterLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: #f9ad66;
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
      color: orange;
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
