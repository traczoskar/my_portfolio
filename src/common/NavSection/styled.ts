import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
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
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  padding: 0.5rem 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
    transform: translateY(-5px);
    text-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavLink = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  padding: 1rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
    transform: translateY(-5px);
    text-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  }
`;

export const NavRouterLink = styled(Link)`
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  padding: 1rem 0;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
    transform: translateY(-5px);
    text-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  }

  &:active {
    filter: brightness(130%);
  }
`;
