import { useTheme } from "styled-components";
import { StyledGear } from "./styled";
import { useMediaQuery } from "react-responsive";

interface AnimatedIconsProps {
  isDarkTheme: boolean;
}

const AnimatedIcons: React.FC<AnimatedIconsProps> = ({ isDarkTheme }) => {
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const theme = useTheme();

  return (
    <>
      <StyledGear
        width={isMobile ? 80 : 200}
        height={isMobile ? 80 : 200}
        top={isMobile ? "6rem" : "11rem"}
        left={isMobile ? "4rem" : "15rem"}
        duration="12s"
        color={
          isDarkTheme
            ? theme.colors.aboutMePage.animations
            : theme.colors.aboutMePage.title1
        }
      />
      <StyledGear
        width={isMobile ? 50 : 120}
        height={isMobile ? 50 : 120}
        top={isMobile ? "8.9rem" : "19.5rem"}
        left={isMobile ? "1.5rem" : "9.8rem"}
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
