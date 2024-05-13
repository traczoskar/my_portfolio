import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface MainContainerProps {
  backgroundColor?: (theme: DefaultTheme) => string;
}

export const MainContainer = styled.main<MainContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor || "inherit"};
`;
