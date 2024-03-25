import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { Button, Icon, IconWrapper } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Button
      title="Theme Switch"
      aria-hidden="true"
      onClick={() => dispatch(toggleTheme())}
    >
      <IconWrapper changeposition={isDarkTheme}>
        <Icon />
      </IconWrapper>
    </Button>
  );
};

{
  /* //changeposition={isDarkTheme} 
  {isDarkTheme ? "on" : "off"}*/
}
