import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface MainContainerProps {
  backgroundColor?: ((theme: DefaultTheme) => string) | string;
}

export const MainContainer = styled.main<MainContainerProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${({ backgroundColor }) => backgroundColor || "inherit"};
`;
