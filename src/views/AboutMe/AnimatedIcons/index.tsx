import { useTheme } from "styled-components";
import { StyledGear } from "./styled";
import { useMediaQuery } from "react-responsive";

interface AnimatedIconsProps {
  isDarkTheme: boolean;
}

const AnimatedIcons: React.FC<AnimatedIconsProps> = ({ isDarkTheme }) => {
  const isTablet: boolean = useMediaQuery({
    query: `(max-width: 1199px)`,
  });
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const theme = useTheme();

  return (
    <>
      <StyledGear
        width={isMobile ? 80 : isTablet ? 110 : 200}
        height={isMobile ? 80 : isTablet ? 110 : 200}
        top={isMobile ? "8rem" : isTablet ? "15vw" : "11rem"}
        left={isMobile ? "7rem" : isTablet ? "80vw" : "15rem"}
        duration="12s"
        color={
          isDarkTheme
            ? theme.colors.aboutMePage.animations
            : theme.colors.aboutMePage.title1
        }
      />
      <StyledGear
        width={isMobile ? 50 : isTablet ? 70 : 120}
        height={isMobile ? 50 : isTablet ? 70 : 120}
        top={isMobile ? "12rem" : isTablet ? "21.5vw" : "19.5rem"}
        left={isMobile ? "5rem" : isTablet ? "74vw" : "9.8rem"}
        duration="12s"
        delay="0.3s"
        color={
          isDarkTheme
            ? theme.colors.aboutMePage.animations
            : theme.colors.aboutMePage.title2
        }
        reversed
      />
    </>
  );
};

export default AnimatedIcons;
