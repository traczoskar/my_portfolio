import styled, { css } from "styled-components";
import { ReactComponent as ThemeSwitchIcon } from "../../assets/themeSwitch.svg";

export const Button = styled.button`
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  cursor: pointer;
  border: none;
  padding: 0;
  margin-left: 1vw;
`;

interface IconWrapperProps {
  changeposition?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
  width: 35px;
  height: 35px;
  border: 2px solid ${({ theme }) => theme.colors.themeSwitch.border};
  padding: 3px;
  border-radius: 50%;
  display: flex;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  transition: transform ease-in-out 0.5s;

  ${({ changeposition }) =>
    changeposition &&
    css`
      transform: rotateY(360deg);
    `}
`;

export const Icon = styled(ThemeSwitchIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.button};
`;
