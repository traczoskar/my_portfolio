import styled from "styled-components";

interface ButtonProps {
  $isOnModal?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  padding: ${({ $isOnModal }) => ($isOnModal ? "0.5rem 1rem" : "1rem")};
  cursor: pointer;
  transition: font-weight 0.3s, color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }

  span {
    transition: font-size 0.2s;
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
      font-size: 0.9rem;
    }
  }

  .active {
    transition: font-size 0.2s;
    font-weight: 800;
    font-size: 1.1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 1rem 0.5rem;
  }
`;
