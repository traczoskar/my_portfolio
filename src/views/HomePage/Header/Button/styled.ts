import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.button.background};
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.button.text};
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: background-position 0.5s ease-in-out;

  &:hover {
    background-position: 100% 0;
  }
`;
