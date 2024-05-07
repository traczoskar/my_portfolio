import styled, { css } from "styled-components";

export const Button = styled.button`
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  border-radius: 0.25rem;

  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;

  &:hover {
    background: #cccccc;
    border: 1px solid #eeeeee;
  }
  &:active {
    transform: scale(0.9);
  }
`;

interface IconWrapperProps {
  $changeposition?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  background: inherit;
  display: flex;
  color: ${({ theme }) => theme.colors.themeSwitch.button};
  svg {
    ${({ $changeposition }) =>
      $changeposition &&
      css`
        transform: rotateY(180deg);
      `}
    transition: ease-in-out 0.3s;
  }
`;
