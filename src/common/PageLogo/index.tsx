import { LogoContainer } from "./styled";
import Logo from "./SVGLogo";

interface PageLogoProps {
  width: number;
  height: number;
}

const PageLogo = ({ width, height }: PageLogoProps) => {
  return (
    <LogoContainer>
      <Logo height={height} width={width} />
    </LogoContainer>
  );
};

export default PageLogo;
