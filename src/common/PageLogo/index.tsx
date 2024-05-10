import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../slices/themeSlice";
import { LogoContainer } from "./styled";
import Logo from "./SVGLogo";

interface PageLogoProps {
  width: number;
  height: number;
}

const PageLogo = ({ width, height }: PageLogoProps) => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <LogoContainer>
      <Logo
        stroke={isDarkTheme ? "#DDDDDD" : "#222222"}
        height={height}
        width={width}
      />
    </LogoContainer>
  );
};

export default PageLogo;
