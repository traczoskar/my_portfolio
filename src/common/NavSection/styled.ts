import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
`;

export const NavHeader = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
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
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }
`;
