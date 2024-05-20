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
  font-weight: 600;
  color: ${({ theme }) => theme.colors.button.text};
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: 0.3s ease;

  &:hover {
    filter: brightness(105%);
    transform: translateY(-5px);
    box-shadow: 0 1px 1px ${({ theme }) => theme.colors.basic},
      0 2px 2px ${({ theme }) => theme.colors.basic};
  }

  &:active {
    transform: scale(0.9);
    box-shadow: none;
  }
`;
