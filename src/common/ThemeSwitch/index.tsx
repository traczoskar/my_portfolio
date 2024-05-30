import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../slices/themeSlice";
import { Button, IconWrapper } from "./styled";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { useMediaQuery } from "react-responsive";
import { selectIsLanguageEN } from "../../slices/languageSlice";

interface ThemeSwitchProps {
  width?: number;
  height?: number;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ width, height }) => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const dispatch = useDispatch();

  return (
    <Button
      title={isLanguageEN ? "Switch theme" : "Zmień motyw"}
      aria-hidden="true"
      onClick={() => dispatch(toggleTheme())}
    >
      <IconWrapper>
        {isDarkTheme ? (
          <Sun
            width={width ? width : isTabletVertical ? 25 : 30}
            height={height ? height : isTabletVertical ? 25 : 30}
          />
        ) : (
          <Moon
            width={width ? width : isTabletVertical ? 25 : 30}
            height={height ? height : isTabletVertical ? 25 : 30}
          />
        )}
      </IconWrapper>
    </Button>
  );
};
