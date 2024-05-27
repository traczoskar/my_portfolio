import { useTheme } from "styled-components";
import { StyledGear } from "./styled";

interface AnimatedIconsProps {
  isDarkTheme: boolean;
}

const AnimatedIcons: React.FC<AnimatedIconsProps> = ({ isDarkTheme }) => {
  const theme = useTheme();
  return (
    <>
      <StyledGear
        width={200}
        height={200}
        top="11rem"
        left="15rem"
        duration="12s"
        color={
          isDarkTheme
            ? theme.colors.aboutMePage.animations
            : theme.colors.aboutMePage.title1
        }
      />
      <StyledGear
        width={120}
        height={120}
        top="19.5rem"
        left="9.8rem"
        duration="12s"
        delay="1.3s"
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
