import { LogoContainer } from "./styled";
import LogoSVG from "./SVGLogo";

interface PageLogoProps {
  width: number;
  height: number;
}

const PageLogo = ({ width, height }: PageLogoProps) => {
  return (
    <LogoContainer>
      <LogoSVG height={height} width={width} />
    </LogoContainer>
  );
};

export default PageLogo;
