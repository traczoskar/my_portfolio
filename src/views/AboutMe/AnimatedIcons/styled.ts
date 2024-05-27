import styled, { keyframes, css } from "styled-components";
import { ReactComponent as Gear } from "../../../assets/icons/gear.svg";

interface StyledGearProps {
  duration: string;
  reversed?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  delay?: string;
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledGear = styled(Gear)<StyledGearProps>`
  position: absolute;
  transition: color 0.3s ease;
  color: ${({ color, theme }) => color || theme.colors.aboutMePage.animations};
  top: ${({ top }) => top || "12rem"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "8rem"};
  animation: ${({ duration, reversed, delay }) => css`
    ${spinAnimation} ${duration} linear infinite ${reversed
      ? "reverse"
      : "normal"};
    animation-delay: ${delay || "0s"};
  `};
`;
