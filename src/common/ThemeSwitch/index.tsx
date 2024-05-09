import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../slices/themeSlice";
import { Button, IconWrapper } from "./styled";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";

export const ThemeSwitch = () => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Button
      title="Theme Switch"
      aria-hidden="true"
      onClick={() => dispatch(toggleTheme())}
    >
      <IconWrapper>
        {isDarkTheme ? (
          <Sun width={30} height={30} />
        ) : (
          <Moon width={30} height={30} />
        )}
      </IconWrapper>
    </Button>
  );
};
